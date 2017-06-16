function performComponents(input) {
    let performedComponents = new Map();

    for (let currentInfo of input) {
        let [systemName, componentName, subcomponentName] = currentInfo.split(' | ');

        if (!performedComponents.has(systemName)) {
            performedComponents.set(systemName, new Map());
            performedComponents.get(systemName).set(componentName, []);
            performedComponents.get(systemName).get(componentName).push(subcomponentName);
        } // if systemName doesn't exist -> set [systemName, componentName, subcomponentName] step by step
        else if (!performedComponents.get(systemName).has(componentName)) {
            performedComponents.get(systemName).set(componentName, []);
            performedComponents.get(systemName).get(componentName).push(subcomponentName);
        }  // if systemName exist but componentName doesn't -> set [componentName, subcomponentName] again step by step
        else {
            performedComponents.get(systemName).get(componentName).push(subcomponentName);
        } // if systemName and componentName exists -> push only subcomponentName
    }

    let sortedSystems = Array.from(performedComponents.keys())
        .sort((a, b) => systemsFirstCriteria(a, b));

    for (let system of sortedSystems) {
        console.log(system);
        let sortedComponents =
            Array.from(performedComponents
                .get(system)
                .keys())
                .sort((cFirst, cSecond) => performedComponents
                    .get(system).get(cSecond).length
                    - performedComponents
                    .get(system).get(cFirst).length
                ); // sorting components by size in descending order

        for (let component of sortedComponents) {
            console.log(`|||${component}`);

            performedComponents
                .get(system)
                .get(component)
                .forEach(sb => console.log(`||||||${sb}`));
        }
    }

    function systemsFirstCriteria(a, b) {
        let sorted = performedComponents.get(b).size - performedComponents.get(a).size;

        if (sorted === 0) {
            sorted = a.toLowerCase().localeCompare(b.toLowerCase())
        }
        return sorted;
    } // sort by amount of components in each key in descending order
}
performComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);