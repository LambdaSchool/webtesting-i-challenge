const enhancer = require('./enhancer');
const {laser, electricSword, poisonDart, sword, chain} = require('./weapon')
const {forceField, invisibleShield} = require('./armor')

const repairedSword = {
    name: 'Sword',
    type: 'weapon',
    durability: 100,
    enhancement: '+13'
}

describe('repair function', () => {
    test('sets the durability at 100', () => {
        expect(enhancer.repair(sword)).toEqual(repairedSword)
    })
})

describe('the success function', () => {

    test(' 15 is increased to PRI', () => {
            expect( () => {
                enhancer.success(invisibleShield)
            })
        })

    test('increases enhancement +=1', () => {
        expect(enhancer.success(chain))
    });

    test('TET is increased to PEN', () => {
        expect( () => {
            enhancer.success(forceField)
        })
    })

    test(' Won"t Enhance when setting is PEN', () => {
        expect(() => {
            enhancer.success(laser)
        }).toThrow()
    })

    test('Won"t enhance when setting is <= 14 and durability < 25', () => {
        expect(()=>{
            enhancer.success(poisonDart)
        }).toThrow();
    })

    test('Won"t enhance when setting is > 15 and durability < 10', () => {
        expect(() => {
            enhancer.success(electricSword)
        })
    })
})