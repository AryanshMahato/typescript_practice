const NodeCache = require("node-cache");


export class Cache {

    myCache = new NodeCache();

    constructor() {
        this.myCache.set(1, 0);
        this.myCache.set(2, 1);
    }

    // checks if the key exists in cache
    check(key: number): boolean {
        if (this.myCache.has(key)) {
            return true;
        }
        else {
            return false;
        }
    }

    // gets the value of the key from cache
    get(key: number): number {
        return this.myCache.get(key);
    }

    // sets the key value pair in cache
    set(key: number, result: number): void {
        this.myCache.set(key, result);
    }

    // deletes the key value pair from cache
    del(key: number): void {
        this.myCache.del(key);
    }

    // lists all the value in the cache
    list() {
        return this.myCache.keys();
    }

    // deletes everything from the cache
    flush() {
        this.myCache.flushAll();
    }
}
