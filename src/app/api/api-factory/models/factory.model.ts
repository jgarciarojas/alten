import { FeatureModel } from './feature.model';

export interface FactoryModel {
    _id: string;
    name: string;
    features: Array<FeatureModel>;
}

export interface FactoryPrincipal {
    factory: Array<FactoryModel>;
}


