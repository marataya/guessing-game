class GuessingGame {
    constructor(min=null,max=null) {
		this.min = min;
        this.max = max;
        this._num = null;
	}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this._num = this.min + Math.round((this.max - this.min)/2);
        return this._num;
    }

    lower() {
		this.max = this._num;
    }

    greater() {
		this.min = this._num;
    }
}

module.exports = GuessingGame;
