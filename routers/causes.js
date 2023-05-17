var router=require("express").Router()

router.get("/power",(req,res)=>{
    texts=[
        'Generating electricity and heat by burning fossil fuels such as coal, oil and natural gas causes a large chunk of global emissions. Most electricity is still produced from fossil fuels; only about a quarter comes from wind, solar and other renewable sources.',
        'The environmental problems directly related to energy production and consumption include air pollution, climate change, water pollution, thermal pollution, and solid waste disposal. The emission of air pollutants from fossil fuel combustion is the major cause of urban air pollution.'
    ]

    image='/assets/causes/powerGraph.svg'

    res.render("cause",{
        texts,title:"Generating too much power",image,hero:"/assets/causes/power.jpg"
    })
})

router.get("/deforestation",(req,res)=>{
    texts=[
        'Cutting down forests to create farms or pastures, or for other reasons, causes emissions, since trees, when they are cut, release the carbon they have been storing. Since forests absorb carbon dioxide, destroying them also limits nature’s ability to keep emissions out of the atmosphere.',
        'Forest sustainable management and their use of resources are key to combating climate change, and to contributing to the prosperity and well-being of current and future generations. Forests also play a crucial role in poverty alleviation and in the achievement of the Sustainable Development Goals (SDGs). '
    ]

    image='/assets/causes/defgraph.jpeg'

    res.render("cause",{
        texts,title:"Cutting down forests",image,hero:"/assets/causes/deforestation.jpg"
    })
})

router.get("/transportation",(req,res)=>{
    texts=[
        'Most cars, lorries, ships and planes run on fossil fuels. That makes transportation a major contributor of greenhouse gases, especially carbon-dioxide emissions. Road vehicles account for the largest part, but emissions from ships and planes continue to grow.',
        'Air pollution emitted from transportation contributes to smog, and to poor air quality, which has negative impacts on the health and welfare of U.S. citizens. Pollutants that contribute to poor air quality include particulate matter (PM), nitrogen oxides (NOx), and volatile organic compounds (VOCs).'
    ]

    image='/assets/causes/transportgraph.png'

    res.render("cause",{
        texts,title:"Transportation",image,hero:"/assets/causes/pollution.jpg"
    })
})

router.get("/consumption",(req,res)=>{
    texts=[
        'Your home and use of power, how you move around, what you eat and how much you throw away all contribute to greenhouse gas emissions. So does the consumption of goods such as clothing, electronics and plastics.',
        'The energy sector is the largest emitter of greenhouse gases into the atmosphere, contributing to climate change. In turn, changes in climate can disrupt energy networks themselves, stress infrastructure, and pose safety risks to people.'
    ]

    image='/assets/causes/fossil_fuel_chart.jpg'

    res.render("cause",{
        texts,title:"Consuming too much",image,hero:"/assets/causes/garbage.jpg"
    })
})

module.exports=router