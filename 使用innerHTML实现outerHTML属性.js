/**
 * Created by 银哲 on 2017/7/19.
 */
(function(){
    if(document.createElement("div").outerHTML)
        return ;
    function outerHTMLGetter(){
        var containern = document.createElement("div");
        container.appendChild(this.cloneNode(true));
        return container.innerHTML;
    }
    function outerHTMLSetter(value){
        var container = document.createElement("div");
        container.innerHTML = value;
        while(container.firstChild)
        this.parentNode.insertBefore(container.firstChild.this);
        this.parentNode.removeChild(this);
    }
    if(Object.defineProperty){
        Object.defineProperty(Element.prototype,"outerHTML",{
            get:outerHTMLGetter,
            set:outerHTMLSetter,
            enumerable:false,configurable:true
        });
    }
    else{
        Element.prototype._defineGetter_("outerHTML",outerHTMLGetter);
        Element.prototype._defineSetter_("outerHTML",outerHTMLSttter);
    }
}());