class World {
    context: CanvasRenderingContext2D;
    private boardWidth: number;
    private boardHeight: number;
    private size: BoardSize;
    constructor(canvas: HTMLCanvasElement) {
        this.context = canvas.getContext("2d");
        this.size = {rows:9,cols:9};
    }
    getSize() {
        return this.size;
    }
    private getCellSize() {
        return { w: this.boardWidth / this.size.cols, h: this.boardHeight / this.size.rows };
    }
    getCellCenter(row: number, col: number) {
        var cellWidth = this.boardWidth / this.size.cols;
        var cellHeight = this.boardHeight / this.size.rows;
        return { x: (col * cellWidth) + (cellWidth / 2), y: (row * cellHeight) + (cellHeight / 2) };
    }
    draw() {
        this.context.strokeStyle = "black";
        this.boardWidth = this.context.canvas.width;
        this.boardHeight = this.context.canvas.height;
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.drawAllSquares(0, 0);
    }
    private drawAllSquares(x: number, y: number) {
        this.context.strokeStyle = "grey";
        var cellWidth = this.boardWidth / this.size.cols;
        var cellHeight = this.boardHeight / this.size.rows;
        // draw all 81 little squares
        this.context.lineWidth = 1;
        for (var row = 0; row < this.size.rows; row++) {
            this.drawSquaresForRow(row, cellWidth, cellHeight);
        }
    }
    private drawSquaresForRow(row: number, cellWidth: number, cellHeight: number) {
        var x = 0, y = 0;
        for (var col = 0; col < this.size.cols; col++) {
            this.context.strokeRect(x + (col * cellWidth), y + (row * cellHeight), cellWidth, cellHeight);
        }
    }
}