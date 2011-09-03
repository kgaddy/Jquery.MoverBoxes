module("index.html",{
    setup : function(){
        S.open('../index.html');
    },
    teardown : function(){
        
    }
})
test("Move stuff around and test", function(){
    S("#optId_3").click();
    S("#moveRight").click();
    S("#optId_4").click();
    S("#moveLeft").click();
    S("#GetSelected").click(); 

    S('#SelectedItems').exists(function(){
    	var count = S('#SelectedItems li').size();
    	ok(count===2,'Two items are selected:' + count);
    	var one = S('#SelectedItems li:first-child').html();
    	var two = S('#SelectedItems li:last-child').html();
    	ok(one==='5', 'First value should be 5:' + one);
    	ok(two==='3', 'Secons value should be 3:' + two);
    });

    S("#GetUnSelected").click(); 
    S('#SelectedItems').exists(function(){
      
   
        var one = S('#SelectedItems li:first-child').html();
        var two = S('#SelectedItems li:last-child').html();
        var three = S('#SelectedItems li:nth-child(2) ').html();
        ok(one==='1', 'First value should be 1:' + one);
        ok(two==='4', 'Second value should be 4:' + two);
        ok(three==='2', 'Thrird value should be 2:' + three);
    });
})

