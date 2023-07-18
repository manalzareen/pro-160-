    AFRAME.registerComponent("tour", {
        schema: {
        state: { type: "string", default: "places-list" },
        selectedCard: { type: "string", default: "#card1" },
        },
    init: function () {
        this.placesContainer = this.el;
        this.createPlaces();
    },
    tick: function() {
      const { state } = this.el.getAttribute("tour");
  
      if (state === "view") {
        this.hideEl([this.placesContainer]);
        this.showView();
      }
    },
    hideEl: function (elList) {
        elList.map(el => {
          el.setAttribute("visible", false);
        });
      },
      showView: function () {
        const {selectedCard}=this.data;
        //console.log( selectedCard)
        const skyel = document.querySelector("#main-container")
        skyel.setAttribute("material", {
          src: `./assets/360_images/${selectedCard}.jpg`,
          color: "white"
        });
      },
    
    
    createPlaces: function () {
        const details = {
        garden:{
            position:{x:20,y:-4.5,z:-5.5},
            rotation:{x:0,y:-90,z:0},
            src:"./assets/360_images/360_images/place-garden.jpg",
            title:"Garden",
            id:"garden"       
            },
        main_gate:{
         position:{x:4.6,y:-5.5,z:25},
        rotation:{x:180,y:0,z:0},
         src:"assets/360_images/360_images/place-main_gate.jpg",
         title:"Main gate",
         id:"main_gate"
           },
          home:{
          position:{x:-9,y:34,z:-100},
          rotation:{x:0,y:0,z:0},
          src:"./assets/360_images/360_images/place-home.jpg",
          title:"My home",
          id:"home"
         },    
        }
        for (var key in details){
            const item = details[key]
            const thumbNail=this.createThumbNail(item)
            const title = this.createTitleEl(item)
            thumbNail.appendChild(title)
            this.placesContainer.appendChild(thumbNail)

        }
    },
    createThumbNail: function (item) {
        const entityEl = document.createElement("a-entity");
        const id =`place-${item.id}`
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("geometry", {
          primitive: "circle",
          radius: 3,
        });
        entityEl.setAttribute("position",item.position);
        entityEl.setAttribute("rotation",item.rotation);
        entityEl.setAttribute("material",{src:item.src,opacity:0.6})
    entityEl.setAttribute("cursor-listener",{})
        return entityEl;
      },
      createTitleEl: function ( item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
   
    entityEl.setAttribute("visible", true);
    
    return entityEl;
  },

        
        });