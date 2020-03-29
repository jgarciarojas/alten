import { ControlModel } from './control.model';
export interface FeatureModel {
    _id: string;
    name: string;
    active: boolean;
    control: Array<ControlModel>;
}
