AFRAME.registerComponent("car-model",{
    schema:{
        posX:{type:"number",default:0},
        posY:{type:"number",default:0},
        posZ:{type:"number",default:0},
        modelRef:{type:"string",default:"./Assets/Car1/scene.gltf"}
    },

    init:function(){
        this.el.setAttribute("gltf-model",this.data.modelRef);
    }
});

AFRAME.registerComponent("rotate-on-click", {
    schema: {
        clickCounter: {type: "number", default: 0}
    },

    update: function() {
        window.addEventListener("click", () => {
            this.data.clickCounter = this.data.clickCounter +1;

            if(this.data.clickCounter === 1){
                const rotation = {x: 0, y: 50, z: 0};

                this.el.setAttribute("rotation", rotation);
            } else if(this.data.clickCounter === 2){
                const rotation = {x: 0, y: 100, z: 0};

                this.el.setAttribute("rotation", rotation);
            } else if(this.data.clickCounter === 3){
                const rotation = {x: 0, y: 150, z: 0};

                this.el.setAttribute("rotation", rotation);
            } else if(this.data.clickCounter === 4){
                const rotation = {x: 0, y: 200, z: 0};
                
                this.el.setAttribute("rotation", rotation);
            } else if(this.data.clickCounter === 5){
                const rotation = {x: 0, y: 250, z: 0};

                this.el.setAttribute("rotation", rotation);
            } else if(this.data.clickCounter === 6){
                const rotation = {x: 0, y: 300, z: 0};

                this.el.setAttribute("rotation", rotation);
            } else if(this.data.clickCounter === 7){
                const rotation = {x: 0, y: 350, z: 0};

                this.el.setAttribute("rotation", rotation);
            } else if(this.data.clickCounter === 8){
                const rotation = {x: 0, y: 25, z: 0};

                this.el.setAttribute("rotation", rotation);

                this.data.clickCounter = 0;
            }
        })
    }
})
