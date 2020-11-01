class ViewMainPage
{
    private myf:MyFramework;

    constructor(myf:MyFramework)
    {
        this.myf = myf;
    }

    showDevices(list: DeviceInt[]):void
    {
        let e:HTMLElement = this.myf.getElementById ("devicesList");

        for (let dev of list)
        {
            let image = "window.png";
            if (dev.type == 1)
            {
                image = "lightbulb.png"
            }

            let checked = "";
            if (dev.state == 1)
            {
                checked = "checked"
            }

            let isLight = "";
            if (dev.type == 1)
            {
                isLight = "checked"
            }

            e.innerHTML += `<li class="collection-item avatar">
                                <img src="static/images/${image}" alt="" class="circle">
                                <div class="row">
                                    <form class="col s12">
                                        <div class="row">
                                            <div class="input-field col s6">
                                                <input value="${dev.name}" id="name_${dev.id}" type="text" class="validate">
                                                <label class="active" for="name_${dev.id}">Nombre</label>
                                            </div>
                                            <div class="input-field col s6">
                                                <input value="${dev.description}" id="desc_${dev.id}" type="text" class="validate">
                                                <label class="active" for="desc_${dev.id}">Descripción</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <a href="#!" class="secondary-content">
                                    <div class="switch">
                                        Power:
                                        <label>
                                         Off
                                        <input id="dev_${dev.id}" type="checkbox" ${checked}>
                                        <span class="lever"></span>
                                        On
                                        </label>
                                    </div>
                                    <div class="switch">
                                        Tipo:
                                        <label>
                                        Cortina
                                        <input id="type_${dev.id}" type="checkbox" ${isLight}>
                                        <span class="lever"></span>
                                        Luz
                                        </label>
                                    </div>
                                </a>
                            </li>`;
        }
    }

    getPowerSwitchStateById(id:string):boolean
    {
        let e:HTMLElement = this.myf.getElementById(id);
        let i:HTMLInputElement = <HTMLInputElement> e;

        return i.checked;
    }

    getTypeSwitchStateById(id:string):boolean
    {
        let e:HTMLElement = this.myf.getElementById(id);
        let i:HTMLInputElement = <HTMLInputElement> e;

        return i.checked;
    }

    getNameValueById(id:string):string
    {
        let e:HTMLElement = this.myf.getElementById(id);
        let i:HTMLInputElement = <HTMLInputElement> e;

        return i.value;
    }

    getDescriptionValueById(id:string):string
    {
        let e:HTMLElement = this.myf.getElementById(id);
        let i:HTMLInputElement = <HTMLInputElement> e;

        return i.value;
    }
}