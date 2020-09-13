import Button from '@/components/Button'
import Tooltip from '@/components/Tooltip '
import Container from '@/components/Container'
import Footer from '@/components/Footer'
import Main from '@/components/Main'
import Aside from '@/components/Aside'
import Header from '@/components/Header'
import Input from '@/components/Input'
import Toast from '@/plugin/toast'
import Collapse from '@/components/Collapse'
import CollapseItem from '@/components/CollapseItem'

const myUI = {}

myUI.install = function(Vue) {
  Vue.component(Tooltip.name, Tooltip)
  Vue.component(Button.name, Button)
  Vue.component(Container.name, Container)
  Vue.component(Footer.name, Footer)
  Vue.component(Main.name, Main)
  Vue.component(Aside.name, Aside)
  Vue.component(Header.name, Header)
  Vue.component(Input.name, Input)
  Vue.component(Collapse.name, Collapse)
  Vue.component(CollapseItem.name, CollapseItem)
  Vue.use(Toast)
}

export default myUI
