describe('Car should behave like a car:', function(){
    let underTest; 

    beforeEach( function(){
        underTest = new Car();
    })

    describe('Car should accelerate:', function(){

        describe('when accelerator is pressed', function(){

            it('it should faster by 10 mph', function(){
                underTest.accelerate();
                expect(underTest.getSpeed()).toBe(10);
            })
        })

    })

    describe('Car should slow down:', function(){

        describe('when brake is pressed', function(){

            it('it should slow down by 7', function(){
                underTest.accelerate();  // Accelerate to 10 mph
                underTest.brake();      // Reduce speed by 7 mph
                expect(underTest.getSpeed()).toBe(3);
            })
        })
    })


})