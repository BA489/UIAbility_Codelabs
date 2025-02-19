if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface IndexPage_Params {
    message?: string;
}
import router from "@ohos:router";
import CommonConstants from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
import Logger from "@normalized:N&&&entry/src/main/ets/common/utils/Logger&";
const TAG = '[IndexPage]';
class routerParams {
    src: string;
    constructor(str: string) {
        this.src = str;
    }
}
class IndexPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU(CommonConstants.INDEX_MESSAGE, this, "message");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: IndexPage_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params: IndexPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
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
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel({ "id": 16777222, "type": 10003, params: [], "bundleName": "com.benjaminakhigbe.myapplication", "moduleName": "entry" });
            Button.fontSize(CommonConstants.BUTTON_FONT_SIZE);
            Button.width(CommonConstants.BUTTON_WIDTH);
            Button.height(CommonConstants.BUTTON_HEIGHT);
            Button.backgroundColor({ "id": 16777223, "type": 10001, params: [], "bundleName": "com.benjaminakhigbe.myapplication", "moduleName": "entry" });
            Button.onClick(() => {
                router.pushUrl({
                    url: CommonConstants.SECOND_URL,
                    params: new routerParams(CommonConstants.SECOND_SRC_MSG)
                }).catch((error: Error) => {
                    Logger.info(TAG, 'IndexPage push error' + JSON.stringify(error));
                });
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
        return "IndexPage";
    }
}
registerNamedRoute(() => new IndexPage(undefined, {}), "", { bundleName: "com.benjaminakhigbe.myapplication", moduleName: "entry", pagePath: "pages/IndexPage", pageFullPath: "entry/src/main/ets/pages/IndexPage", integratedHsp: "false" });
