let { Repository } = require("./solution.js");
let { expect } = require("chai");



describe("Repository", function () {
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };
    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };
    let sameEntity = {...entity};
    
    describe("Initialization properties", function () {
        it("Should add props property on init", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);
            expect(repository).to.have.property("props");
            expect(repository.props).to.deep.equal(properties);
        });
        it("should have property data on init", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);
            expect(repository).to.have.property("data");
            expect(repository.data).instanceOf(Map);
        });

    });

    describe("Add entity", function () {
        it("Should return id zero when first entity is added", function () {
            let repository = new Repository(properties);
            let result = repository.add(entity);
            let result2 = repository.add(entity);

            expect(result).to.equal(0);
            expect(result2).to.equal(1);
        });

        it("Should store valid enitity in data map", function () {
            let repository = new Repository(properties);
            repository.add(entity);

            expect(repository.data.get(0)).not.to.be.undefined;
            //expect(repository.data.get(0)).to.deep.equal(entity);
            expect(repository.data.get(0)).to.have.property('name').that.equal('Pesho');
            expect(repository.data.get(0)).to.have.property('age').that.equal(22);
            expect(repository.data.get(0)).to.have.property('birthday');

        });

        it("Should throw error if property is missing", function () {

            let entity = {
                name: "Pesho",
                age: 22,
            }

            let repository = new Repository(properties);

            expect(() => repository.add(entity).to.throw(new Error, `Property birthday is missing from the entity!`));
        });
        it("Should throw error error if property has other type", function () {

            let entity = {
                name: "Pesho",
                age: 22,
                birthday: "789456123"
            }

            let repository = new Repository(properties);

            expect(() => repository.add(entity).to.throw(Error, `Property birthday is not correct type!`));
        });
    });
    describe("Get count", function () {
        it("Should return number of add valid entities", function () {
            
            let repository = new Repository(properties);
            repository.add(entity);
            repository.add(entity);
            repository.add(entity);


            expect(repository.count).is.equal(3);
        });
        it("Should return zero if no added entity", function () {
            let repository = new Repository(properties);
        
            expect(repository.count).is.equal(0);
        });
    })
    describe("Next Id", function () {
        it("Should return next id +1", function () {
            let entity2 = {
                name: "gero",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let repository = new Repository(properties);
            repository.add(entity);
            expect(repository.nextId()).to.equal(1);
            repository.add(entity2);
            expect(repository.nextId()).to.equal(3);
        });
    })
    describe("Get Id", function () {
        it("Should return error when call getId with id who not exist", function () {
            let repository = new Repository(properties);
            repository.add(entity);

            expect(() => repository.getId(5).to.throw(Error,`Entity with id: 5 does not exist!`)); 
        });
        it("Should return entity by id", function () {
            let repository = new Repository(properties);
            repository.add(entity);

           expect(repository.getId(0)).to.deep.equal(sameEntity);
        });
    })

    describe("Update", function () {
        it("Should return error when call getId with id who not exist", function () {
            let repository = new Repository(properties);
            expect(()=> repository.update(3, entity)).to.throw(Error,`Entity with id: 3 does not exist!`)
        });
        it("Should return entity by id", function () {
            let repository = new Repository(properties);
            repository.add(entity);
            let entity2 = {
                name: "Pwesho",
                age: 225,
                birthday: new Date(1998, 0, 7)
            };
            repository.update(0,entity2)

            expect(entity2).to.equal(repository.getId(0));
        });
    })

    describe("Dell", function () {
        it("Should return error when call getId with id who not exist", function () {
            let repository = new Repository(properties);
            expect(()=> repository.del(3).to.throw(Error,`Entity with id: 3 does not exist!`));
            expect(()=> repository.del(85).to.throw(Error,`Entity with id: 85 does not exist!`));
        });
        it("Should return entity by id", function () {
            let repository = new Repository(properties);
            repository.add(entity);
           
            repository.del(0,entity)

            expect(repository.data.get(0)).to.equal(undefined);
        });
    })


});
