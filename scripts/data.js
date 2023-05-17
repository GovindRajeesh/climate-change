var causes = [
    {
        link:"/causes/power",
        title: "Generating power",
        img: "/assets/causes/power.jpg",
        text: `Generating electricity and heat by burning fossil fuels such as coal, oil and natural gas causes a large chunk of global emissions. Most electricity is still produced from fossil fuels; only about a quarter comes from wind, solar and other renewable sources.`
    },
    {
        link:"/causes/deforestation",
        title: "Cutting down forests",
        img: "/assets/causes/deforestation.jpg",
        text: `Cutting down forests to create farms or pastures, or for other reasons, causes emissions, since trees, when they are cut, release the carbon they have been storing. Since forests absorb carbon dioxide, destroying them also limits nature’s ability to keep emissions out of the atmosphere.`
    },
    {
        link:"/causes/transportation",
        title: "Using transportation",
        img: "/assets/causes/pollution.jpg",
        text: `Most cars, lorries, ships and planes run on fossil fuels. That makes transportation a major contributor of greenhouse gases, especially carbon-dioxide emissions. Road vehicles account for the largest part, but emissions from ships and planes continue to grow.`
    },
    {
        link:"/causes/consumption",
        title: "Consuming too much",
        img: "/assets/causes/garbage.jpg",
        text: `Your home and use of power, how you move around, what you eat and how much you throw away all contribute to greenhouse gas emissions. So does the consumption of goods such as clothing, electronics and plastics.`
    },
]

var impacts = [
    {
        title: "Hotter Temperatures",
        img: "/assets/impacts/hot_temp.jpg",
        text: `Higher temperatures increase heat-related illnesses and can make it more difficult to work and move around. Wildfires start more easily and spread more rapidly when conditions are hotter.`,
        link:"/impacts/hotTemp",
    },
    {
        title: "Severe Storms",
        img: "/assets/impacts/storm.jpg",
        text: "Changes in temperature cause changes in rainfall. This results in more severe and frequent storms. They cause flooding and landslides, destroying homes and communities, and costing billions of pounds.",
        link:"/impacts/storms",
    },
    {
        link:"/impacts/drought",
        title: "Increased drought",
        img: "/assets/impacts/drought.jpg",
        text: "Water is becoming scarcer in more regions. Droughts can stir destructive sand and dust storms that can move billions of tons of sand across continents. Deserts are expanding, reducing land for growing food."
    },
    {
        link:"/impacts/species",
        title: "Loss of species",
        img: "/assets/impacts/loss_of_species.jpg",
        text: "Climate change poses risks to the survival of species on land and in the ocean. These risks increase as temperatures climb. Forest fires, extreme weather and invasive pests and diseases are among many threats."
    },
    {
        link:"/impacts/food",
        title: "Not enough food",
        img: "/assets/impacts/food.jpg",
        text: "Changes in climate and increases in extreme weather events are among the reasons behind a global rise in hunger and poor nutrition. Fisheries crops, and livestock may be destroyed or become less productive.",
    },
]


var actions = [
    {
        title: "Save Energy at Home",
        img: "/assets/actions/energy.png",
        text: `Use less energy by lowering your heating and cooling, switching to LED light bulbs and energy-efficient electric appliances, washing your laundry with cold water or hanging things to dry instead of using a dryer.`
    },
    {
        title: "Walk, cycle or take public transport",
        img: "/assets/actions/cycle.png",
        text: `The world’s roads are clogged with vehicles, most of them burning diesel or petrol. Walking or riding a bike instead of driving will reduce greenhouse gas emissions – and help your health and fitness.`
    },
    {
        title: "Eat more vegetables",
        img: "/assets/actions/vegetables.png",
        text: "Eating more vegetables, fruits, whole grains, legumes, nuts and seeds, and less meat and dairy, can significantly lower your environmental impact. Producing plant-based foods generally results in fewer greenhouse gas emissions and requires less energy, land and water."
    },
    {
        title: "Reduce, reuse, repair & recycle",
        img: "/assets/actions/rrr.png",
        text: `Electronics, clothes and other items we buy cause carbon emissions at each point in production, from the extraction of raw materials to manufacturing and transporting goods to market. To protect our climate, buy fewer things, shop second-hand, repair what you can and recycle.`
    },
    {
        title: "Change your home's source of energy",
        img: "/assets/actions/solarpanel.png",
        text: `Ask your utility company if your home energy comes from oil, coal or gas. If possible, see if you can switch to renewable sources such as wind or solar. Or install solar panels on your roof to generate energy for your home.`
    },
    {
        title: "Consider your travel",
        img: "/assets/actions/travel.png",
        text: `Aeroplanes burn large amounts of fossil fuels, producing significant greenhouse gas emissions. That makes taking fewer flights one of the fastest ways to reduce your environmental impact. When you can, meet virtually, take a train or skip that long-distance trip altogether.`
    },
]

var policies = [
    {
        title: "Carbon pricing",
        text: `Carbon pricing is a policy tool that puts a price on the carbon dioxide and other greenhouse gases that are emitted by human activities. The goal of carbon pricing is to create an economic incentive for businesses and individuals to reduce their emissions and transition to cleaner, more sustainable forms of energy.

        There are two main types of carbon pricing: carbon taxes and cap-and-trade systems.

Carbon taxes: A carbon tax is a fee that is placed on each unit of greenhouse gas emissions that a business or individual produces. The tax rate can vary depending on the amount of emissions produced, and it is typically set by the government. The idea behind a carbon tax is to create a financial incentive for businesses and individuals to reduce their emissions, by making it more expensive to continue using fossil fuels.

Cap-and-trade systems: A cap-and-trade system sets a limit, or cap, on the total amount of greenhouse gas emissions that can be produced within a certain time period. Businesses are then given allowances that allow them to emit a certain amount of greenhouse gases, up to the cap. If a business emits less than its allotted amount, it can sell its unused allowances to other businesses that need them. This creates a market for emissions allowances, and the price of those allowances can fluctuate depending on supply and demand.
        `
    },
    {
        title: "Renewable energy mandates",
        text: `
        Renewable energy mandates are policies that require a certain percentage of a country's or region's energy to come from renewable sources, such as wind, solar, hydroelectric, or geothermal power. These policies are designed to accelerate the transition away from fossil fuels and toward cleaner, more sustainable forms of energy.

Renewable energy mandates can take several different forms, but two of the most common are:

Renewable portfolio standards (RPS): An RPS requires utilities to generate a specified percentage of their electricity from renewable sources. The percentage is typically increased over time, with the goal of achieving a certain level of renewable energy by a specific date.

Feed-in tariffs (FITs): A FIT is a policy that guarantees a certain price for electricity generated from renewable sources. This price is typically higher than the market price for electricity, in order to provide an incentive for businesses and individuals to invest in renewable energy generation.

Renewable energy mandates have been implemented in various countries around the world, with varying degrees of success. Countries such as Germany, Denmark, and Portugal have made significant progress in transitioning to renewable energy sources, thanks in part to aggressive renewable energy mandates. In the United States, many states have implemented their own RPS policies, with California and Hawaii leading the way with ambitious targets for renewable energy generation.`
    },
    {
        title: "Building codes and efficiency standards",
        text: `Building codes and efficiency standards are policies that set minimum requirements for the energy efficiency of buildings. The goal of these policies is to reduce energy consumption in buildings and lower greenhouse gas emissions from the building sector, which is one of the largest contributors to global emissions.

        There are several different types of building codes and efficiency standards, including:
        
        Energy codes: Energy codes set minimum requirements for the energy efficiency of new buildings and major renovations. These codes typically address building envelope (insulation, windows, doors, etc.), lighting, and HVAC (heating, ventilation, and air conditioning) systems.
        
        Appliance and equipment efficiency standards: Appliance and equipment efficiency standards set minimum energy efficiency requirements for a range of products, including refrigerators, air conditioners, water heaters, and other appliances. These standards are typically set by national or regional governments.
        
        Green building certification programs: Green building certification programs, such as LEED (Leadership in Energy and Environmental Design), provide voluntary standards for the design, construction, and operation of green buildings. These programs often include a range of energy efficiency measures, as well as measures to promote sustainable site design, water conservation, and indoor environmental quality.`,
    },
    {
        title:"Vehicle emissions standards",
        text:`
        Vehicle emission standards are regulations that set limits on the amount of pollution that can be emitted by vehicles. The goal of these standards is to reduce the harmful effects of vehicle emissions on air quality and public health.
        
        There are two main types of vehicle emission standards: tailpipe emission standards and fuel economy standards.
        
        Tailpipe emission standards: Tailpipe emission standards set limits on the amount of pollutants that can be emitted from a vehicle's exhaust. The main pollutants regulated by these standards are carbon monoxide (CO), nitrogen oxides (NOx), particulate matter (PM), and volatile organic compounds (VOCs). The standards typically specify a maximum level of each pollutant that a vehicle can emit per mile driven.
        
        Fuel economy standards: Fuel economy standards set minimum requirements for the average fuel economy of a manufacturer's fleet of vehicles. The goal of these standards is to reduce greenhouse gas emissions from vehicles by promoting the use of more fuel-efficient technologies, such as hybrid and electric vehicles.
        
        Vehicle emission standards have been implemented in many countries around the world, with varying degrees of stringency. In the United States, the Environmental Protection Agency (EPA) sets tailpipe emission standards for cars, trucks, and other vehicles, while the National Highway Traffic Safety Administration (NHTSA) sets fuel economy standards.
        
        `
    },
    {
        title:"Forest conservation and restoration",
        text:`Forest conservation and restoration are policies aimed at protecting and restoring forests, which are essential for maintaining biodiversity, regulating the Earth's climate, and providing a range of ecosystem services.

        There are several different types of forest conservation and restoration policies, including:
        
        Forest protection: Forest protection policies aim to prevent deforestation and forest degradation by limiting activities that can harm forests, such as logging, mining, and agricultural expansion. These policies may include regulations, taxes, and incentives to promote sustainable forest management.
        
        Reforestation and afforestation: Reforestation and afforestation policies involve planting new trees in areas where forests have been cleared or degraded. These policies can help to restore ecosystems, increase carbon sequestration, and provide a range of other benefits, such as improving soil health and water quality.
        
        Forest landscape restoration: Forest landscape restoration policies aim to restore degraded landscapes by bringing back native trees and other vegetation, improving soil health, and promoting biodiversity. These policies may also involve the restoration of other ecosystem services, such as water regulation and erosion control.
        
        Payment for ecosystem services (PES): PES policies involve compensating landowners or communities for the ecosystem services provided by forests, such as carbon sequestration, water regulation, and biodiversity conservation. These policies can provide incentives for forest conservation and restoration, while also supporting local livelihoods.
        
        Forest conservation and restoration policies have been implemented in many countries around the world, with varying degrees of success. Some of the challenges associated with these policies include illegal logging, lack of funding and technical expertise, and conflicts between conservation goals and economic development. However, there is growing recognition of the importance of forests for sustainable development, and many countries are taking steps to strengthen forest conservation and restoration efforts.`
    }
]