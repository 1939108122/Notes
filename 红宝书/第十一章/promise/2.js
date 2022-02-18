function double(value, success, failure) {
    setTimeout(
        () => {
            try {
                if (typeof value !== 'number') {
                    throw 'value must be number type'
                }
                success(value);
            } catch (error) {
                failure(error);
            }
        },
    1000)
}

const successCallback = (x) => console.log(`success: ${x}`)
const failureCallback = (error) => console.log(`failure: ${error}`)

double(3, successCallback, failureCallback);
double('a', successCallback, failureCallback);
