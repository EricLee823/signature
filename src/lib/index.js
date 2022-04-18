import "./index.css"
class Signature {

  constructor(nodeId) {
    this.img = ''
    this.nodeId = nodeId
  }

  //获取签章图片
  getSignatureImg () {
    this.img = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fexp-picture.cdn.bcebos.com%2Fd47cb624d8e9ccd2f4d6afec0e40102a05e2c905.jpg%3Fx-bce-process%3Dimage%2Fresize%2Cm_lfit%2Cw_500%2Climit_1&refer=http%3A%2F%2Fexp-picture.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652496565&t=b74e99b2c770fb785fd717e6255dc4ac"
  }
  //页面签章
  signature () {
    this.getSignatureImg()
    const node = document.getElementById(`${this.nodeId}`)
    if (node.querySelectorAll("#signature_node").length) {
      toast("已存在签章", 1000)
    } else {
      const boxNode = document.createElement("div")
      boxNode.setAttribute("id", 'signature_node')
      const imgNode = document.createElement("img")
      imgNode.className = "signature_img"
      imgNode.setAttribute("src", this.img)
      imgNode.setAttribute("draggable", "false")
      boxNode.appendChild(imgNode)
      node.appendChild(boxNode)
      //阻止点击事件冒泡
      imgNode.onclick = function (e) {
        let event = e || window.event;
        if (event.stopPropagation) {
          event.stopPropagation();
        } else {
          event.cancelBubble = true;
        }
      }

      imgNode.addEventListener("mousedown", function (divEvent) {

        document.onmousemove = function (ev) {
          imgNode.style.left = ev.clientX - divEvent.offsetX - node.offsetLeft + "px";
          imgNode.style.top = ev.clientY - divEvent.offsetY - node.offsetHeight - node.offsetTop + "px";
        }

        imgNode.onmouseup = function () {
          document.onmousemove = null;

        }

        document.onmouseup = function () {
          document.onmousemove = null;
        }
      })

    }

  }
}

function toast (text, time) {
  const toastArr = document.getElementsByClassName('toast_box')
  if (!toastArr.length) {
    let toast_box = document.createElement('div');
    toast_box.className = "toast_box"
    let toast = document.createElement('p');
    toast.setAttribute("id", "toast")
    document.body.appendChild(toast_box)
    toast_box.appendChild(toast)
    toast.innerHTML = text;
    toast_box.style.animation = 'show 0.2s'
    toast_box.style.display = 'inline-block';
    let timer = setTimeout(function () {
      toast_box.style.animation = 'hide 0.2s'
      clearTimeout(timer)
      let timerinner = setTimeout(function () {
        document.body.removeChild(toast_box)
        clearTimeout(timerinner)
      }, 200)
    }, time)
  }


}
window.Signature = Signature

export default Signature