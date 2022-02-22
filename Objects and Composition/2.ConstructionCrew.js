function worker(obj) {

    if (obj.dizziness) {
        let water = (0.1 * obj.weight) * obj.experience;
        obj.levelOfHydrated += water;
        obj.dizziness = false;
    }

    return obj;

}

console.log(worker(
    {
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }
));
console.log(worker(
    {
        weight: 95,
        experience: 3,
        levelOfHydrated: 0,
        dizziness: false
    }

));