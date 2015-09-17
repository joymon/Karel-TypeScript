class World {
    private cols: number = 9;
    private rows: number = 9;
    private context: CanvasRenderingContext2D;
    private boardOffset: number;
    private boardWidth: number;
    private boardHeight: number;
    private size: any;
    constructor(canvas:HTMLCanvasElement) {        
        this.context = canvas.getContext("2d");
        this.boardOffset = 0;
        this.size = { width: 9, height: 9 };
    }
    getSize() {
        return this.size;
    }
    getScreenDimensions() {
        var w, h;
        if ($(window).width() > $(window).height()) {
            w = $(window).width();
            h = $(window).height();
        } else {
            h = $(window).width();
            w = $(window).height();
        }
    }
    getCellSize() {
        return { w: this.boardWidth / this.cols, h: this.boardHeight / this.rows };
    }
    getCellCenter(row, col) {
        var cellWidth = this.boardWidth / this.cols;
        var cellHeight = this.boardHeight / this.rows;
        return { x: (col * cellWidth) + (cellWidth / 2), y: (row * cellHeight) + (cellHeight / 2) };
    }
    draw() {
        this.context.strokeStyle = "black";
        this.boardWidth = this.context.canvas.width;
        this.boardHeight = this.context.canvas.height;
        var x = this.boardOffset;
        var y = 0;

        //    this.context.canvas.width = this.screenWidth;
        //    this.context.canvas.height = this.screenHeight;

        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        //this.iDrawBoardSquare(x, y);
        this.iDrawSquares(x, y);

    }
    iDrawBoardSquare(x, y) {
        this.context.fillStyle = "black";
        this.context.lineWidth = 2;
        this.context.strokeStyle = "black";
        this.context.strokeRect(x, y, this.boardWidth, this.boardHeight);
    }
    iDrawSquares(x, y) {
        this.context.strokeStyle = "grey";
        var cw = this.boardWidth / this.cols;
        var ch = this.boardHeight / this.rows;
        // draw all 81 little squares
        this.context.lineWidth = 1;
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.cols; j++) {
                this.context.strokeRect(x + (j * cw), y + (i * ch), cw, ch);

            }
        }
    }
}