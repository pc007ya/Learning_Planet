import { initializeTestEnvironment, assertSucceeds, assertFails } from '@firebase/rules-unit-testing';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { readFileSync } from 'node:fs';
const env=await initializeTestEnvironment({projectId:'demo-learning-planet-audit',firestore:{host:'127.0.0.1',port:8088,rules:readFileSync(process.env.RULES_FILE||'firestore.rules','utf8')}});
const old=process.env.EXPECT_VULNERABLE==='1';
const s=env.authenticatedContext('sA',{role:'student'}).firestore(),t=env.authenticatedContext('tA',{role:'teacher'}).firestore(),a=env.authenticatedContext('admin',{role:'admin'}).firestore(),n=env.unauthenticatedContext().firestore();
let count=0;
async function check(name,fn){await fn(); count++;console.log('PASS',name)}
async function seed(){await env.clearFirestore();await env.withSecurityRulesDisabled(async c=>{const db=c.firestore();for(const [path,data] of Object.entries({
 'teachers/tA':{assignedClassIds:['cA','cA2'],assignedCourseIds:['math','english']},'students/sA':{classId:'cA'},'students/sB':{classId:'cB'},
 'student_progress/a':{studentId:'sA',classId:'cA',score:1},'student_progress/b':{studentId:'sB',classId:'cB',score:1},
 'weekly_results/a':{userId:'sA',classId:'cA',testId:'test'},'weekly_results/b':{userId:'sB',classId:'cB',testId:'test'},
 'course_assignments/a':{studentId:'sA',classId:'cA',courseId:'math'},'course_assignments/b':{studentId:'sB',classId:'cB',courseId:'math'},'course_assignments/otherCourse':{studentId:'sA',classId:'cA',courseId:'secret'}
}))await setDoc(doc(db,path),data);});}
try{
 const attacks=[['student takes progress',s,'student_progress/b',{studentId:'sA',classId:'cA',score:99}],['teacher takes outside progress',t,'student_progress/b',{studentId:'sA',classId:'cA',score:99}],['student takes weekly result',s,'weekly_results/b',{userId:'sA',classId:'cA',testId:'test',score:99}],['teacher takes outside assignment',t,'course_assignments/b',{studentId:'sA',classId:'cA',courseId:'math'}],['teacher takes unassigned course',t,'course_assignments/otherCourse',{studentId:'sA',classId:'cA',courseId:'math'}]];
 for(const [name,db,path,data] of attacks){await seed();await check(name,()=>old?assertSucceeds(setDoc(doc(db,path),data)):assertFails(setDoc(doc(db,path),data)));}
 await seed();
 for(const path of ['students/sA','student_progress/a','weekly_results/a','course_assignments/a'])await check('anonymous read denied '+path,()=>assertFails(getDoc(doc(n,path))));
 await check('own progress update',()=>assertSucceeds(setDoc(doc(s,'student_progress/a'),{studentId:'sA',classId:'cA',score:2})));
 await check('own weekly update',()=>assertSucceeds(setDoc(doc(s,'weekly_results/a'),{userId:'sA',classId:'cA',testId:'test',score:2})));
 await check('teacher own class progress',()=>assertSucceeds(setDoc(doc(t,'student_progress/a'),{studentId:'sA',classId:'cA',score:3})));
 await check('teacher assigned course change',()=>assertSucceeds(setDoc(doc(t,'course_assignments/a'),{studentId:'sA',classId:'cA',courseId:'english'})));
 await check('teacher outside destination denied',()=>assertFails(setDoc(doc(t,'course_assignments/a'),{studentId:'sB',classId:'cB',courseId:'math'})));
 await check('admin progress migration',()=>assertSucceeds(setDoc(doc(a,'student_progress/b'),{studentId:'sA',classId:'cA',score:3})));
 for(const [db,path,data] of [[s,'student_progress/new',{studentId:'sA',classId:'cA'}],[s,'weekly_results/new',{userId:'sA',classId:'cA',testId:'test'}],[t,'course_assignments/new',{studentId:'sA',classId:'cA',courseId:'math'}]])await check('legitimate create '+path,()=>assertSucceeds(setDoc(doc(db,path),data)));
 console.log(`TOTAL ${count}; mode ${old?'original-vulnerable':'fixed'}`);
} finally {await env.cleanup()}
