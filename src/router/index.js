import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Componente1 from '@/components/Componente1'
import Componente2 from '@/components/Componente2'
import Componente3 from '@/components/Componente3'
import Quadribol from '@/components/Quadribol'
import TestePolitico from '@/components/TestePolitico'
import Compras from '@/components/Compras'
import Teste from '@/components/Teste'
import Teste2 from '@/components/Teste2'

Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/',
    name: 'Hello',
    component: Hello
},
{
    path: '/Componente1',
    name: 'Componente1',
    component: Componente1
},
{
    path: '/Componente2',
    name: 'Componente2',
    component: Componente2
},
{
    path: '/Componente3',
    name: 'Componente3',
    component: Componente3
},
{
    path: '/Quadribol',
    name: 'Quadribol',
    component: Quadribol
},
{
    path: '/TestePolitico',
    name: 'TestePolitico',
    component: TestePolitico
},
{
    path: '/Compras',
    name: 'Compras',
    component: Compras
},
{
    path: '/Teste',
    name: 'Teste',
    component: Teste
},
{
    path: '/Teste2',
    name: 'Teste2',
    component: Teste2
}
  ]
})
