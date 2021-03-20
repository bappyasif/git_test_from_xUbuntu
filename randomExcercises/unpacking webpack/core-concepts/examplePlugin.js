class ExamplePlugin {
    apply(compiler) {
        compiler.plugin("run",(compiler, callback) => {
            console.log("webpack runnnig....");
            callback();
        });
    }
}

module.exports = ExamplePlugin;