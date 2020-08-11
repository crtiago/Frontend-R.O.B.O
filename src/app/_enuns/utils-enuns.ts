export class UtilsEnuns{
    
   static getValues(E){
        return Object.keys(E).filter(k => typeof E[k as any] === "number");
    }

   static getIds(E,keys){
        return keys.map(k => E[k as any]);
    }
}