module.exports = SillyBus;

function SillyBus() {
    return sillyBus;
}

var sillyBus = {
    topics: {},

    subscribe: function (topic, listener) {
        // create the topic if not yet created
        if (!this.topics[topic]) this.topics[topic] = [];

        // add the listener
        this.topics[topic].push(listener);
    },

    publish: function (topic, data) {
        return new Promise((resolve, reject) => {
            // return if the topic doesn't exist, or there are no listeners
            if (!this.topics[topic] || this.topics[topic].length < 1)
                reject("the topic '" + topic + "' doesn't exist or there are no listeners");

            // send the event to all listeners
            this.topics[topic].forEach(function (listener) {
                listener(data || {});
            });
            resolve("done");
        });
    }
};