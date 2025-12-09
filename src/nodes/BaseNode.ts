export abstract class BaseNode {
    protected _key: string;
    protected _parent: BaseNode | null = null;
    protected _type: string;

    constructor(key?: string){
        this._key = key || this.generateKey();
        this._type = 'base'
    }

    private generateKey():string{
        return Math.random().toString(36).substring(2,11);
    }

    getKey():string{
        return this._key;
    }

    getType():string{
        return this._type;
    }

    getParent(): BaseNode | null{
        return this._parent;
    }

    setParent(parent: BaseNode | null): void{
        this._parent = parent;
    }

    isTextNode(): boolean{
        return false;
    }

    isElementNode():boolean{
        return false;
    }

    abstract exportJSON(): Record<string, any>;
    abstract createDOM(): HTMLElement;
}