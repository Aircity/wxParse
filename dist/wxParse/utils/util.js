let windowWidth=0,windowHeight=0;wx.getSystemInfo({success(n){windowWidth=n.windowWidth,windowHeight=n.windowHeight}});const getSystemInfo=()=>[windowWidth,windowHeight],bindInstance=(()=>{let n=null;return{set:(t,e=null)=>(n||(n={[t]:e}),n[t]),clear:()=>{n=null}}})();module.exports={getSystemInfo:getSystemInfo,bindInstance:bindInstance};