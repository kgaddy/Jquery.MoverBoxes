module("index.html",{
    setup : function(){
        S.open('../index.html');
    },
    teardown : function(){
        
    }
})
test('Labels are correct', function(){
    S('.leftBox-label').exists(function(){
        ok(S('.leftBox-label').html()==='Unassigned','Should be unassigned');
    });
      S('.rightBox-label').exists(function(){
        ok(S('.rightBox-label').html()==='Assigned','Should be assigned');
    });
});

test('Move all buttons',function(){
    S('#moveRightAll').exists().click();
    S("#GetSelected").click(); 
    S('#SelectedItems').exists(function(){
        var count = S('#SelectedItems li').size();
        ok(count===5,'Five items are selected:' + count);
        var one = S('#SelectedItems li:first-child').html();
        var two = S('#SelectedItems li:last-child').html();
        ok(one==='4', 'First value should be 4:' + one);
        ok(two==='3', 'Second value should be 3:' + two);
    });

    S('#moveLeftAll').exists().click();
    S("#GetSelected").click(); 
    S('#SelectedItems').exists(function(){
        var count = S('#SelectedItems li').size();
        ok(0===0,'No items are selected:' + count);
      
    });



});


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

