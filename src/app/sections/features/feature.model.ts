export class Feature {
    logo: string;
    technology: string;
    desc: string;
    btnLabel: string;
    imgClass: string = '';
    constructor(logo: string, technology: string, desc: string, btnLabel: string, imgClass?: string) {
        this.logo = logo;
        this.technology = technology;
        this.desc = desc;
        this.btnLabel = btnLabel;
        this.btnLabel = btnLabel;
        if (imgClass)
            this.imgClass = imgClass;
    }

}

export class FeatureList {
    feature: Feature[] = [];
    constructor(feature: Feature[]){
        this.feature = feature;
    }
}