

(function () {


    window.dtsutils = {

        Test1(item) {
            alert('dtsTest');
        },


        Test2(item) {
            alert('dtsTest2');
        },


        Test3(item) {
            alert('dtsTest3');
        },

        setupObject(vGroupObject) {
            alert('setupObject');
        },

        setupGroup(vGroup) {

            var vObjectGroup = vGroup["objectGroup"];

            alert('setupGroup called' + vObjectGroup.length);

            vObjectGroup.forEach(dtsutils.setupObject);
        }

    }

})();