function onGame(gameName){

        
 
    $.ajax({
            type:"get",        
            url:"/games/getGame/"+gameName,
            cache:false,            
            success:function(json){
               
           
                $(window).scrollTop(0);
                    



                        var gameMask = document.getElementById("game-view-mask");
                        var gameView = document.getElementById("game-view-window");

                        $("#game-view-mask").css("visibility", "visible");  
                        $("#game-view-window").css("visibility","visible");
                        
                        document.documentElement.style.overflow='hidden'
                        var gameImage = document.getElementById("gameImage");
                        gameImage.src = "/public/images/"+json.name+".jpg"
                        var gameName = document.getElementById("gameName");
                        gameName.innerText = json.name;
                        gameName.val = json._id;

                        var ignRate = document.getElementById("ignRate");
                        ignRate.innerHTML = json.ignRate;

                        var releaseDate = document.getElementById("releaseDate");
                        releaseDate.innerText = json.releaseDate;
                        var developer = document.getElementById("developer");
                        developer.innerText = json.developer;
                        var publisher = document.getElementById("publisher");
                        publisher.innerText = json.publisher;
                        var description = document.getElementById("description");
                        description.innerText = json.description;

                        var genersContainer = document.getElementById("genersA");
                        genersContainer.innerHTML="";
                        var geners = json.geners;
                        for(var curIndex in geners){
                               var curItem  = document.createElement("a");
                               curItem.className =  "badge badge-success";  //class="badge badge-success"
                               curItem.style="margin-left:5px;"
                               curItem.innerText = geners[curIndex];
                               genersContainer.appendChild(curItem);
                            
                        }

                           /**
             
                    <td>Geners:</td>
                    <td id = "geners">
                        <a href="#" class="badge badge-primary"></a>
                    </td>
                */

                        //below is comment.....!!!!!
                        var commentContainer = document.getElementById("comment-container");
                        commentContainer.innerHTML = "";

          /*
           <tr>  
                    <th scope="row" rowspan="3">1</th> 
                    
  
            */
          
                        var comments = json.comments;
                        
                        for(var curIndex in comments){

                            var rowContainer =  document.createElement("tr");
                          
                            var curComment = comments[curIndex];
                          

                           // var trItem1 = document.createElement("tr");
                            var thItem = document.createElement("th");
                            thItem.scope="row";
                          
                            thItem.innerText = parseInt(curIndex)+1;
                           // var headtdUsername =  document.createElement("td");
                           // headtdUsername.innerText = "User: "
                         var tdItem = document.createElement("td");
                         var smallTable = document.createElement("table");
                        // tdItem.style = "width:500px;word-wrap:break-word ;padding-left:150px";
                        //tdItem.className = "flex-wrap";
                    

                         var smallTrItem1 = document.createElement("tr");
                         var smallTrItem2 = document.createElement("tr");
                         var smallTrItem3 = document.createElement("tr");
//////
                         var userTd = document.createElement("td");
                          userTd.className = "text-left";
                         userTd.innerText = curComment.poster.name;

                         var rateTd = document.createElement("td");

                        // alert(comments);
                        rateTd.className = "text-right";
                        rateTd.innerText ="Rate:" +curComment.rate;
                         smallTrItem1.appendChild(userTd);
                         smallTrItem1.appendChild(rateTd);
                         smallTrItem1.style = "border-bottom: 2px solid #DCDCDC;";

                        // var headCommentTd = document.createElement("td");
                        // headCommentTd.className = "text-left";
                        // headCommentTd.innerText = "Comment:";

                         var commentTd = document.createElement("td");
                          commentTd.className = "text-left";
                         var innerComment =  document.createElement("div");
                         innerComment.innerText = curComment.comment;
                       
                         //commentTd.className = "text-justify";
                         innerComment.style = "word-break:break-all; word-wrap:break-all;";
                         innerComment.className = "text-left";
                         commentTd.appendChild(innerComment);

//
                        // smallTrItem2.appendChild(headCommentTd);
                         smallTrItem2.appendChild(commentTd);

                         var createAtTd = document.createElement("td");
                         createAtTd.colSpan = "2";
                         createAtTd.className = "text-right";
                         createAtTd.innerText = curComment.createAt;
                         smallTrItem3.appendChild(createAtTd);

                        smallTable.appendChild(smallTrItem1);
                        smallTable.appendChild(smallTrItem2);
                        smallTable.appendChild(smallTrItem3);

                         smallTable.style = "width:100%";
                         smallTable.className = "table-borderless alert-primary rounded";
                        tdItem.appendChild(smallTable)
                       
                        rowContainer.appendChild(thItem);
                        rowContainer.appendChild(tdItem);
                        


                        commentContainer.appendChild(rowContainer);

                        }

                        



             },error:function(){}
            });
          

}


function onComment(){

      var a = $('#comment-form').serializeArray()
      var userO = document.getElementById("commentButton").getAttribute('value');
   
      var gameName = document.getElementById("gameName");
     var commentObject = {
          gameId:gameName.val,poster:userO,commentContent:null,rateNumber:null

       }
      for(var curIndex in a){
           
               commentObject[a[curIndex].name] = a[curIndex].value               
            

        }
/*
     
    for(var curIndex in commentObject){
           
                           
              alert(curIndex+commentObject[curIndex]);

        }
      
  */
     
   

    $.ajax({
            type:"post",        
            url:"/games/addComment",
            data:commentObject,
            cache:false,            
            success:function(curComment){
                    
                   
                     var commentContainer = document.getElementById("comment-container");
                      //  commentContainer.innerHTML = "";
                     var curIndex = commentContainer.childNodes.length;
                      
                            var rowContainer =  document.createElement("tr");
                          
                            //var curComment = comments[curIndex];
                           //alert(curComment.rate)

                     
                            var thItem = document.createElement("th");
                            thItem.scope="row";
                          
                            thItem.innerText = curIndex+1;
                           // var headtdUsername =  document.createElement("td");
                           // headtdUsername.innerText = "User: "
                         var tdItem = document.createElement("td");
                         var smallTable = document.createElement("table");
                     

                         var smallTrItem1 = document.createElement("tr");
                         var smallTrItem2 = document.createElement("tr");
                         var smallTrItem3 = document.createElement("tr");
//////
                         var userTd = document.createElement("td");
                          userTd.className = "text-left";
                         userTd.innerText = curComment.poster.name;

                         var rateTd = document.createElement("td");

                        // alert(comments);
                        rateTd.className = "text-right";
                        rateTd.innerText ="Rate:" +curComment.rate;
                         smallTrItem1.appendChild(userTd);
                         smallTrItem1.appendChild(rateTd);
                         smallTrItem1.style = "border-bottom: 2px solid #DCDCDC;";

                        // var headCommentTd = document.createElement("td");
                        // headCommentTd.className = "text-left";
                        // headCommentTd.innerText = "Comment:";

                         var commentTd = document.createElement("td");
                          commentTd.className = "text-left";
                         var innerComment =  document.createElement("div");
                         innerComment.innerText = curComment.comment;
                       
                         //commentTd.className = "text-justify";
                         innerComment.style = "word-break:break-all; word-wrap:break-all;";
                         innerComment.className = "text-left";
                         commentTd.appendChild(innerComment);

//
                        // smallTrItem2.appendChild(headCommentTd);
                         smallTrItem2.appendChild(commentTd);

                         var createAtTd = document.createElement("td");
                         createAtTd.colSpan = "2";
                         createAtTd.className = "text-right";
                         createAtTd.innerText = curComment.createAt;
                         smallTrItem3.appendChild(createAtTd);

                        smallTable.appendChild(smallTrItem1);
                        smallTable.appendChild(smallTrItem2);
                        smallTable.appendChild(smallTrItem3);

                         smallTable.style = "width:100%";
                         smallTable.className = "table-borderless alert-primary rounded";
                        tdItem.appendChild(smallTable)
                       
                        rowContainer.appendChild(thItem);
                        rowContainer.appendChild(tdItem);
                        


                        commentContainer.appendChild(rowContainer);
                        //scroll to bottom
                        var cur_window = document.getElementById("game-view-window");
                         var top = cur_window.scrollHeight;
                        cur_window.scrollTop = top;

                       
                        
                      


            },error:function(){

                        alert("Please log in first!")
            }
            });
        

}

function onCloseWindow(){
document.documentElement.style.overflow='auto'
  $("#game-view-mask").css("visibility", "hidden");  
  $("#game-view-window").css("visibility","hidden");
}
