import { SVG_NS } from '../settings';

export default class Paddle {
    constructor(boardHeight, width, height, x, y, up, down) {
        this.boardHeight = boardHeight;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = 10;
        this.score = 0;
        
        document.addEventListener('keydown', event => {
            switch (event.key) {
                case up:
                    this.up();
                    break;
                case down:
                    this.down();
                    break;
                    
                default: 
                // what goes here and is this necessary??
            }
        
          });
    }

    up() {
        //establish max position
        this.y = Math.max(0, this.y - this.speed);
    
    }

    down() {
        //establish min y position
        this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
    }

    
    render(svg) {
            let rect = document.createElementNS(SVG_NS, 'rect');
            rect.setAttributeNS(null, 'width', this.width);
            rect.setAttributeNS(null, 'height', this.height);
            rect.setAttributeNS(null, 'x', this.x);
            rect.setAttributeNS(null, 'y', this.y);
            rect.setAttributeNS(null, 'fill', 'white');
           
            svg.appendChild(rect);
    }
}
