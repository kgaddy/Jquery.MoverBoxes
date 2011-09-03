module("index.html",{
    setup : function(){
        S.open('../index.html');
    },
    teardown : function(){
        
    }
})
test("change me!", function(){
    S("#optId_3").click();
    S("#moveRight").click();
    S("#optId_4").click();
    S("#moveLeft").click();
    S("#GetSelected").click(); 

    S('#SelectedItems').exists(function(){
    	var count = S('#SelectedItems li').size();
    	ok(count===2,'Two items are selected');
    	var one = S('#SelectedItems li:first-child').html();
    	var two = S('#SelectedItems li:last-child').html();
    	ok(one==='5', 'first value should be 5:' + one);
    	ok(two==='3', 'first value should be 3:' + two);
    });
})

