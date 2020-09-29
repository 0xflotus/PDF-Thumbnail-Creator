// https://stackoverflow.com/questions/42512982/node-js-get-the-first-page-of-pdf-buffer  => getting buffer array for the first page

'use strict';

// const EventEmitter = require('events');
class PDFRStreamForBuffer {
    constructor(buffer) {
        this.innerBuffer = buffer;
        this.rposition = 0;
        this.fileSize = buffer.byteLength;
    }

    read(inAmount) {
        let arr = [];

        for (let i = 0; i < inAmount; i++) {
            arr.push(this.innerBuffer[this.rposition + i]);
        }

        this.rposition += inAmount;

        return arr;
    }

    notEnded() {
        return this.rposition < this.fileSize;
    }

    setPosition(inPosition) {
        this.rposition = inPosition;
    }

    setPositionFromEnd(inPosition) {
        this.rposition = this.fileSize - inPosition;
    }

    skip(inAmount) {
        this.rposition += inAmount;
    }

    getCurrentPosition() {
        return this.rposition;
    }
}
module.exports = PDFRStreamForBuffer;

