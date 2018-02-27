
declare namespace NodeJS {
    interface Global {
        //应用基本路径
        appPath: string;
    }
}

declare interface JQuery<TElement extends Node = HTMLElement> extends Iterable<TElement> {
    swap: (b: JQuery) => this;
}
declare interface Window {
    $: JQueryStatic;
    jQuery: JQueryStatic;
}
