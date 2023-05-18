var router=require("express").Router()

router.get("/hotTemp",(req,res)=>{
    texts=[
        "The Earth is now about 1.1°C warmer than it was in the 1800s. We are not on track to meet the <a href='https://en.wikipedia.org/wiki/Paris_Agreement'>Paris Agreement</a> target to keep global temperature from exceeding 1.5°C above pre-industrial levels. That is considered the upper limit to avoid the worst fallout from climate change.Nearly all land areas are seeing more hot days and heat waves; 2020 was one of the hottest years on record. Higher temperatures increase heat-related illnesses and can make it more difficult to work and move around. Wildfires start more easily and spread more rapidly when conditions are hotter.",
        "Since the mid-1980s, Arctic surface air temperatures have warmed at least twice as fast as the global average, while sea ice, the Greenland ice sheet and glaciers have declined over the same period and permafrost temperatures have increased."
    ]

    images=[
        "/assets/forest-fire.jpg",
        "/assets/impacts/hotenv.jpeg",
        "/assets/impacts/hotearth.jpeg",
        "/assets/impacts/manhot.avif"
    ]
    res.render("impact",{
        texts,title:"Hot Temperature",images,hero:"/assets/forest-fire.jpg"
    })
})

router.get("/storms",(req,res)=>{
    texts=[
        "Changes in temperature cause changes in rainfall. This results in more severe and frequent storms. They cause flooding and landslides, destroying homes and communities, and costing billions of pounds.",
        "As more water vapor is evaporated into the atmosphere it becomes fuel for more powerful storms to develop.",
        "Climate change is making the air warmer, which allows it to hold more moisture, and both of those factors can boost the chance of thunderstorms."
    ]

    images=[
        "/assets/impacts/storms/heavyrain.webp",
        "/assets/impacts/storm.jpg",
    ]
    res.render("impact",{
        texts,title:"Severe Storms",images,hero:"/assets/impacts/storm.jpg"
    })
})

router.get("/drought",(req,res)=>{
    texts=[
        "Drought is a deficiency in precipitation over an extended period. It is a part of normal climate variability in many climate zones. The duration of droughts varies widely.",
        "Water is becoming scarcer in more regions. Droughts can stir destructive sand and dust storms that can move billions of tons of sand across continents. Deserts are expanding, reducing land for growing food. Many people now face the threat of not having enough water on a regular basis."
    ]

    images=[
        "/assets/impacts/drought.jpg",
        "/assets/impacts/drought1.jpg",
        "/assets/impacts/graphdrought.png",
        "/assets/impacts/graphfrought2.png",
    ]
    res.render("impact",{
        texts,title:"Drought",images,hero:"/assets/impacts/drought.jpg"
    })
})

router.get("/species",(req,res)=>{
    texts=[
        "Climate change poses risks to the survival of species on land and in the ocean. These risks increase as temperatures climb. Forest fires, extreme weather and invasive pests and diseases are among many threats.",
        "Rising temperatures lower many species survival rates due to changes that lead to less food, less successful reproduction, and interfering with the environment for native wildlife.",
    ]

    extra="<h2>Some Species that have been extinct</h2><ul><li>Black Softshell Turtle.</li><li>Père Davids Deer</li><li>Hawaiian Crow.</li><li>Franklin Tree</li><li>Wyoming Toad.</li></ul>"

    images=[
    ]
    res.render("impact",{
        texts,title:"Loss of species",images,hero:"/assets/impacts/loss_of_species.jpg",extra
    })
})

router.get("/food",(req,res)=>{
    texts=[
        "Changes in climate and increases in extreme weather events are among the reasons behind a global rise in hunger and poor nutrition. Fisheries crops, and livestock may be destroyed or become less productive.",
        "For example, projected increases in temperatures, changes in precipitation patterns, changes in extreme weather events, and reductions in water availability may all result in reduced agricultural productivity.",
    ]

    images=[
    ]
    res.render("impact",{
        texts,title:"Not Enough Food",images,hero:"/assets/impacts/food.jpg"
    })
})

module.exports=router