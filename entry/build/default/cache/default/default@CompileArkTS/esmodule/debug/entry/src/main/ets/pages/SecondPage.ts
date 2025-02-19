if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SecondPage_Params {
    message?: string;
    params?: routerParams;
    src?: string;
}
import router from "@ohos:router";
import CommonConstants from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
class routerParams {
    src: string = '';
}
class SecondPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU(CommonConstants.SECOND_MESSAGE, this, "message");
        this.__params = new ObservedPropertyObjectPU(router.getParams() as routerParams, this, "params");
        this.__src = new ObservedPropertySimplePU(this.params.src, this, "src");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SecondPage_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.params !== undefined) {
            this.params = params.params;
        }
        if (params.src !== undefined) {
            this.src = params.src;
        }
    }
    updateStateVars(params: SecondPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__params.purgeDependencyOnElmtId(rmElmtId);
        this.__src.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__params.aboutToBeDeleted();
        this.__src.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __message: ObservedPropertySimplePU<string>;
    get message() {
        return this.__message.get();
    }
    set message(newValue: string) {
        this.__message.set(newValue);
    }
    private __params: ObservedPropertyObjectPU<routerParams>;
    get params() {
        return this.__params.get();
    }
    set params(newValue: routerParams) {
        this.__params.set(newValue);
    }
    private __src: ObservedPropertySimplePU<string>;
    get src() {
        return this.__src.get();
    }
    set src(newValue: string) {
        this.__src.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height(CommonConstants.FULL_HEIGHT);
            Row.backgroundColor({ "id": 16777224, "type": 10001, params: [], "bundleName": "com.benjaminakhigbe.myapplication", "moduleName": "entry" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(CommonConstants.FULL_WIDTH);
            Column.height(CommonConstants.LAYOUT_HEIGHT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.message);
            Text.fontSize(CommonConstants.FONT_SIZE);
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.src);
            Text.fontSize(CommonConstants.PARAMS_FONT_SIZE);
            Text.opacity(CommonConstants.PARAMS_OPACITY);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel({ "id": 16777220, "type": 10003, params: [], "bundleName": "com.benjaminakhigbe.myapplication", "moduleName": "entry" });
            Button.fontSize(CommonConstants.BUTTON_FONT_SIZE);
            Button.width(CommonConstants.BUTTON_WIDTH);
            Button.height(CommonConstants.BUTTON_HEIGHT);
            Button.backgroundColor({ "id": 16777223, "type": 10001, params: [], "bundleName": "com.benjaminakhigbe.myapplication", "moduleName": "entry" });
            Button.onClick(() => {
                router.back();
            });
        }, Button);
        Button.pop();
        Column.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "SecondPage";
    }
}
registerNamedRoute(() => new SecondPage(undefined, {}), "", { bundleName: "com.benjaminakhigbe.myapplication", moduleName: "entry", pagePath: "pages/SecondPage", pageFullPath: "entry/src/main/ets/pages/SecondPage", integratedHsp: "false" });
