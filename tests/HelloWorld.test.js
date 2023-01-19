import HelloWorld from '../utils/HelloWorld'

it ("Should return 'Hellow Addam'", ()=> {
    const result = HelloWorld();

    expect(result).toBe("Hello Addam")
});