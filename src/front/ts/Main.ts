/*=============================================================================
 * Authors: Agustin Bassi, Brian Ducca, Santiago Germino 
 * Date: Jul 2020
 * Licence: GPLV3+
 * Project: DAW - CEIoT - Project Structure
 * Brief: Main frontend file (where the logic is)
=============================================================================*/
interface DeviceInt
{
    id:number;
    name:string;
    description:string;
    state:number;
    type:number;
}


class Main implements EventListenerObject, GETResponseListener, POSTResponseListener
{
    myf:MyFramework;
    view:ViewMainPage;
    counter:number = 0;

    main():void 
    {
        console.log("estoy en main()");

        let usuarios:Array<User>;
        usuarios = new Array<User>();
        usuarios.push (new User(1, "Agustin", "agustin@gmail.com"));
        usuarios.push (new User(2, "Brian", "brian@gmail.com"));
        usuarios.push (new User(3, "Santiago", "santiago@gmail.com"));

        this.mostrarUsers (usuarios);

        this.myf = new MyFramework ();
        this.view = new ViewMainPage (this.myf);

        // Esto se implementa en MyFramework.configEventListener
        // -----------------------------------------------------
        // let b:HTMLElement = document.getElementById ("boton");
        // b.addEventListener ("click", this);

        this.myf.configEventListener ("click", "boton", this);
        this.myf.configEventListener ("click", "save", this);

        this.myf.requestGET ("http://localhost:8000/dispositivos", this);

        // b.textContent = "Hola Mundo!";
    }

    mostrarUsers(users:Array<User>):void
    {
    //    for (let i in users)
    //    {
    //        users[i].printInfo ();
    //    }
        for (let o of users)
        {
            o.printInfo ();
        }
    }

    handleEvent(evt: Event): void
    {
        console.log (`se hizo "${evt.type}"`);

        let b:HTMLElement = this.myf.getElementByEvent (evt);
        console.log ("Esto es b: " + b);

        if (b.id == "boton")
        {
            this.counter ++;
            b.textContent = `Click ${this.counter}`;
        }

        else if (b.id.startsWith("dev_")) 
        {
            /* let state:boolean = this.view.getSwitchStateById (b.id);
            console.log("b.id es: " + b.id + " y state es: " + state);
            let data = { "id":`${b.id}`, "state":state };
            console.log("data en handleEvent es: " + data)
            this.myf.requestPOST ("http://localhost:8000/dispositivos", data, this); */
            console.log(`Switch id: ${b.id}`);
            console.log(`Está on: ${(<HTMLInputElement>b).checked}`);
            let state:boolean = this.view.getPowerSwitchStateById(b.id);
            let id:string = b.id.replace("dev_", "");
            let data = { "id": id, "state": state };
            console.log("data en handleEvent es: " + data);
            this.myf.requestPOST ("http://localhost:8000/dispositivos/estados", data, this);
        }
        
        else if (b.id.startsWith("type")) 
        {
            console.log(`Switch id: ${b.id}`);
            console.log(`Está: ${(<HTMLInputElement>b).checked}`);
            let type:boolean = this.view.getTypeSwitchStateById(b.id);
            let id:string = b.id.replace("type_", "");
            let data = { "id": id, "type": type };
            console.log("data en handleEvent es: " + data);
            this.myf.requestPOST ("http://localhost:8000/dispositivos/tipos", data, this);
        } 
        else
        {
            let lista: Array<string>;
            lista = new Array<string>(); // Array vacio
            lista.push('1', '2', '3', '4', '5', '6');
            for(let i in lista)
            {
                let name:string = this.view.getNameValueById(`name_${lista[i]}`);
                let description:string = this.view.getDescriptionValueById(`desc_${lista[i]}`);
                let id:string = lista[i];
                // let id:string = b.id.replace("dev_", "");
                let data = { "name":name, "description":description, "id":id };
                console.log("data en handleEvent es: " + data);
                this.myf.requestPOST ("http://localhost:8000/dispositivos/referencias", data, this);
            }
        }
    }

    handleGETResponse(status: number, response: string): void
    {
        console.log ("Respuesta del servidor: " + response);

        let data: Array<DeviceInt> = JSON.parse (response);

        console.log (data);

        this.view.showDevices (data);

        for (let d of data)
        {
            let b:HTMLElement = this.myf.getElementById (`dev_${d.id}`);
            b.addEventListener ("click", this);
        }
        for (let d of data)
        {
            let b:HTMLElement = this.myf.getElementById (`type_${d.id}`);
            b.addEventListener ("click", this);
        }
    }

    handlePOSTResponse(status: number, response: string): void
    {
        console.log (status);
        console.log (response);
    }
}


window.onload = () => {
    let m:Main = new Main ();
    m.main ();
}


//=======[ Settings, Imports & Data ]==========================================

let user = "TypesScript Users!";

//=======[ Main module code ]==================================================

function greeter(person) {
    return "Hello, " + person;
}
 
// document.body.innerHTML = greeter(user);

console.log("Hola mundo!");


//=======[ End of file ]=======================================================
