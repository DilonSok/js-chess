$(function() {
    console.log("Main Init Called");
    init();
});

function InitFilesRanksBrd(){
    var index = 0; 
    var currFile = FILES.FILE_A;
    var currRank = RANKS.RANK_1;
    var sq = SQUARES.A1;

    for(index = 0; index < BRD_SQ_NUM; index++){
        FilesBrd[index] = SQUARES.OFFBOARD;
        RanksBrd[index] = SQUARES.OFFBOARD;
    }
    
    for(currRank = RANKS.RANK_1; currRank <= RANKS.RANK_8; currRank++){
        for(currFile = FILES.FILE_A; currFile <= FILES.FILE_H; currFile++){
            sq=fileRank2SQ(currFile, currRank);
            FilesBrd[sq] = currFile;
            RanksBrd[sq] = currRank;
        }
    }

    console.log("FilesBrd[0]: " + FilesBrd[0] + "RanksBrd[0]: " + RanksBrd[0]);
    console.log("FilesBrd[SQUARES.A1]: " + FilesBrd[SQUARES.A1] + " RanksBrd[SQUARES.A1]: " + RanksBrd[SQUARES.A1]);
    console.log("FilesBrd[SQUARES.E8]: " + FilesBrd[SQUARES.E8] + " RanksBrd[SQUARES.E8]: " + RanksBrd[SQUARES.E8]);
}
function init(){
    console.log("init called");
    InitFilesRanksBrd();
}