const DataItems = require('../BD/model/dataitem');

const dataItems = [{
        _id: 1,
        _name: "A",
        _value: 1

    },
    {
        _id: 2,
        _name: "B",
        _value: 2

    },
    {
        _id: 3,
        _name: "C",
        _value: 3

    }
];

const oldtechnique = {
    liveDataGroup: () => {


        return dataItems;
    },
    offlineData: () => 'OffLine Data'
};

const newtechnique = {
    Query: {
        liveDataGroup: () => {

            return dataItems;
        },
        offlineData: () => 'OffLine Data',
        getDataItem: async(root, arg) => {
            try {
                const dataItem = await DataItems.findById(arg.id);
                let restDataItem = {
                    _id: "0",
                    _name: "LOCO",
                    _value: "?"
                };
                if (dataItem) {

                    console.log(`*********:  ${dataItem }`);
                    restDataItem = dataItem;
                }

                //const dataItem = dataItems.find((item) => item._id == arg.id);
                //return dataItem;


                return restDataItem;
            } catch (error) {
                console.log("error", error);
            }


        }
    }
}

module.exports = {
    oldtechnique,
    newtechnique
};