export class GHInput{
    constructor(input, input2) {
      this.set(input, input2);
    }

    round(val, precision) {
        if (precision === undefined)
            precision = 1e6;
        return Math.round(val * precision) / precision;
    }

    setCoord(lat, lng) {
        this.lat = this.round(lat);
        this.lng = this.round(lng);
        this.input = this.toString();
    }

    isObject(value) {
        var stringValue = Object.prototype.toString.call(value);
        return (stringValue.toLowerCase() === "[object object]");
    }

    isString(value) {
        var stringValue = Object.prototype.toString.call(value);
        return (stringValue.toLowerCase() === "[object string]");
    };

    set(strOrObject, input2) {
        if (input2) {
            this.setCoord(strOrObject, input2);
            return;
        }

        // either text or coordinates or object
        this.input = strOrObject;

        if (GHInput.isObject(strOrObject)) {
            this.setCoord(strOrObject.lat, strOrObject.lng);
        } else if (GHInput.isString(strOrObject)) {
            var index = strOrObject.indexOf(",");
            if (index >= 0) {
                this.lat = this.round(parseFloat(strOrObject.substr(0, index)));
                this.lng = this.round(parseFloat(strOrObject.substr(index + 1)));
            }
        }
    }

    toString() {
        if (this.lat !== undefined && this.lng !== undefined)
            return this.lat + "," + this.lng;
        return undefined;
    }
}