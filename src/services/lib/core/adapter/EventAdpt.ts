import { Origin,Event} from '../musicObject';

export class EventAdpt implements Event{
   
    title : string;
    category : string;
    start: Date;
    end :Date;
    location : number[];
    country : string;
    id : string;
    origin : Origin;
    entities : {};
    timezone : string;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : any){
        this.origin= 'predicthq';
       
       this.title = json.title;
       this.category = json.category;
       this.start = json.start
       this.end = json.end
       this.location = json.location
       this.country = json.country
       this.id = json.id;
       this.entities = json.entities
       this.timezone = json.timezone


    }
     


}
 
     
 