var PIECES = {
    EMPTY : 0, 
    //white pieces
    wP : 1, //pawn
    wN : 2, //knight
    wB : 3, //bishop
    wR : 4, //rook
    wQ : 5, //queen
    wK : 6, //king

    bP : 7, //pawn
    bN : 8, //knight
    bB : 9, //bishop
    bR : 10, //rook
    bQ : 11, //queen
    bK : 12, //king
};

var BRD_SQ_NUM = 120;

var FILES = {
    FILE_A:0, 
    FILE_B:1, 
    FILE_C:2, 
    FILE_D:3,
    FILE_E:4,
    FILE_F:5,
    FILE_G:6,
    FILE_H:7,
    FILE_NONE:8
};

var RANKS = {
    RANK_1:0,
    RANK_2:1,       
    RANK_3:2,
    RANK_4:3,
    RANK_5:4,
    RANK_6:5,
    RANK_7:6,
    RANK_8:7,
    RANK_NONE:8
};

var COLORS = {
    WHITE:0,
    BLACK:1,
    BOTH:2
};

var SQUARES = {
    A1:21, B1:22, C1:23, D1:24, E1:25, F1:26, G1:27,H1:28,
    A8:91, B8:92, C8:93, D8:94, E8:95, F8:96,G8:97, H8:98,
    NO_SQ:99, OFFBOARD:100
};



var BOOL = {
    FALSE:0,
    TRUE:1
}

let FilesBrd = new Array(BRD_SQ_NUM);
let RanksBrd = new Array(BRD_SQ_NUM);

function fileRank2SQ(files, ranks){
    return ( (21 + (files)) + ( (ranks) * 10));
}