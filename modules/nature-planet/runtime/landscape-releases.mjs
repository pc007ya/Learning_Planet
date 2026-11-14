// Only exact CPU-reviewed deliveries are eligible; other grades keep their existing worlds.
const releases={
  "1": {
    "grade": 1,
    "modelSha256": "17fb4557fb2624dad58af810ff6c184dcf96eecf04adc762c3de49664ae89eaf",
    "manifestSha256": "a1738eb5ff6091d4429d451416c0df0cde9da99585003d1d74df56af01d61c3b",
    "sourceTerrainSha256": "19687409f78502c37a501ce8549c5c78dcb28a7af72bbb3e493c0eaa84d47e08",
    "checkedActorIds": [
      "Landscape_G1_Fauna_0_0_songbird",
      "Landscape_G1_Fauna_0_1_butterfly",
      "Landscape_G1_Fauna_1_0_butterfly",
      "Landscape_G1_Fauna_1_1_songbird",
      "Landscape_G1_Fauna_2_0_squirrel",
      "Landscape_G1_Fauna_2_1_dragonfly",
      "Landscape_G1_Fauna_3_0_frog",
      "Landscape_G1_Fauna_3_1_squirrel"
    ]
  },
  "2": {
    "grade": 2,
    "modelSha256": "2af17c8592cf05ddc7b769c6c9826d618ad395a3bf059a28edbda73102e4ef91",
    "manifestSha256": "68240c7ca724dd52756b0b8d8eada0eb36b38adc105432c1b6ad2c5ddb23c50e",
    "sourceTerrainSha256": "06ad2ce2cf794469dee89268dbb74bd4a2b7ea9adf98bf8897796eb03cd5ba36",
    "checkedActorIds": [
      "Landscape_G2_Fauna_0_0_squirrel",
      "Landscape_G2_Fauna_0_1_butterfly",
      "Landscape_G2_Fauna_1_0_songbird",
      "Landscape_G2_Fauna_1_1_butterfly",
      "Landscape_G2_Fauna_2_0_butterfly",
      "Landscape_G2_Fauna_2_1_dragonfly",
      "Landscape_G2_Fauna_3_0_frog",
      "Landscape_G2_Fauna_3_1_squirrel"
    ]
  },
  "3": {
    "grade": 3,
    "modelSha256": "dbf213e539ffc47894eeba251cba2078ba1f909633ec01e68521a94d42d57423",
    "manifestSha256": "28fe66ba9af43bd29d6aa2ca5c23ae37f862ea4334a5aea108b7129061483f39",
    "sourceTerrainSha256": "458d7dad2983e60d6ff9ac62bf5194f877fa93e6de296a96e070ee14152eb0a1",
    "checkedActorIds": [
      "Landscape_G3_Fauna_0_0_squirrel",
      "Landscape_G3_Fauna_0_1_butterfly",
      "Landscape_G3_Fauna_1_0_butterfly",
      "Landscape_G3_Fauna_1_1_songbird",
      "Landscape_G3_Fauna_2_0_frog",
      "Landscape_G3_Fauna_2_1_dragonfly",
      "Landscape_G3_Fauna_3_0_songbird",
      "Landscape_G3_Fauna_3_1_squirrel"
    ]
  },
  "4": {
    "grade": 4,
    "modelSha256": "9071b3bc390f203387265e17d507d35649ac866831fcddf83e16ea2fd97d9e04",
    "manifestSha256": "0b41154cec49d7b3afe8d2239dbe81f91eb41acec804cee67d78d998b8edd091",
    "sourceTerrainSha256": "6e1312d4e59d3a5c59b4dd5847110d98e9ca3cee6e30d68e5c107d4830c92e17",
    "checkedActorIds": [
      "Landscape_G4_Fauna_0_0_dragonfly",
      "Landscape_G4_Fauna_0_1_songbird",
      "Landscape_G4_Fauna_1_0_frog",
      "Landscape_G4_Fauna_1_1_dragonfly",
      "Landscape_G4_Fauna_2_0_songbird",
      "Landscape_G4_Fauna_2_1_butterfly",
      "Landscape_G4_Fauna_3_0_otter",
      "Landscape_G4_Fauna_3_1_frog"
    ]
  },
  "5": {
    "grade": 5,
    "modelSha256": "44f63e855d280ee6c26fe7d7746ed3f2762bf8a9c9e3a9d77c7d1476992bebac",
    "manifestSha256": "85902fdacb2111bf6e6978f0ca5a4b8aa3bee80b944531bf5b7ce314e094ec13",
    "sourceTerrainSha256": "6ea2599a353710fd1ce612a17623d4ddfbf36828ee45fd945b7ffc257e7aa7bd",
    "checkedActorIds": [
      "Landscape_G5_Fauna_0_1_songbird",
      "Landscape_G5_Fauna_1_0_squirrel",
      "Landscape_G5_Fauna_1_1_dragonfly",
      "Landscape_G5_Fauna_2_0_songbird",
      "Landscape_G5_Fauna_2_1_butterfly",
      "Landscape_G5_Fauna_3_0_butterfly",
      "Landscape_G5_Fauna_3_1_frog"
    ]
  },
  "6": {
    "grade": 6,
    "modelSha256": "7c66a0e9ec908e72b9aeaee164d3c835ea5bdbdb1cdb3d24561f96257a97390f",
    "manifestSha256": "c2911a0d7377ad4bf89c8d6e7b3b053fa5bf57e845ede347c074bc6d548904db",
    "sourceTerrainSha256": "5236aa1fc058b4f68ab8622a71f4bc4b8dfcf9852e6df015331d74d3cfc6a6e9",
    "checkedActorIds": [
      "Landscape_G6_Fauna_0_0_songbird",
      "Landscape_G6_Fauna_0_1_butterfly",
      "Landscape_G6_Fauna_1_0_crab",
      "Landscape_G6_Fauna_1_1_dragonfly",
      "Landscape_G6_Fauna_2_1_butterfly",
      "Landscape_G6_Fauna_3_1_frog"
    ]
  }
};
export function reviewedLandscapeDescriptor(grade){
 const r=releases[grade];if(!r)return null;
 const base=new URL('../../../assets/models/nature-landscape-v3/',import.meta.url);
 return {...r,manifestUrl:new URL(`grade${grade}-landscape-v3.json`,base),modelUrl:new URL(`grade${grade}-landscape-v3.glb`,base)};
}
export function reviewReleasedFauna({data,manifest}){
 const r=releases[data.grade];
 if(!r||manifest.sha256!==r.modelSha256||manifest.baseTerrainSha256!==r.sourceTerrainSha256||manifest.fauna.length!==r.checkedActorIds.length||manifest.fauna.some(a=>!r.checkedActorIds.includes(a.id)))throw Error('Landscape does not match a CPU-reviewed delivery');
 return {safe:true,checkedActorIds:[...r.checkedActorIds],modelSha256:r.modelSha256,sourceTerrainSha256:r.sourceTerrainSha256};
}
