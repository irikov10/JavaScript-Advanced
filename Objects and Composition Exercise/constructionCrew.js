function constructionCrew(data) {
    let worker = {
        weight: data.weight,
        experience: data.experience,
        levelOfHydrated: data.levelOfHydrated,
        dizziness: data.dizziness
    }

    if(worker.dizziness === true) {
        worker.levelOfHydrated += (worker.weight * 0.1) * worker.experience;
        worker.dizziness = false;
    }

    return worker
}
constructionCrew({ weight: 95,

    experience: 3,
    
    levelOfHydrated: 0,
    
    dizziness: false })