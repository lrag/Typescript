export abstract class Pajaro {

    public subespecie: string;

    constructor(subespecie: string) {
        this.subespecie = subespecie;
    }
	
    public abstract voz(): void;
	
}