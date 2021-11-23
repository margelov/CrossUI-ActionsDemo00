// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
// Sub module don't support async functions
xui.Class('App.Name52', 'xui.Module',{
    Instance:{
        // Dependencies css
        Dependencies: [],
        // Required modules
        Required:[],
        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"xui_ui_dialog8")
                .setLeft("6.095238095238095em")
                .setTop("3.8095238095238093em")
                .setWidth("50.89523809523809em")
                .setHeight("34.89523809523809em")
                .setCaption("Dialog")
            );
            
            host.xui_ui_dialog8.append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel7")
                .setDock("none")
                .setLeft("2.6666666666666665em")
                .setTop("1.6761904761904762em")
                .setWidth("46.17142857142857em")
                .setHeight("28.876190476190477em")
                .setCaption("Panel")
            );
            
            host.xui_ui_panel7.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"xui_ui_treegrid6")
                .setLeft("0em")
                .setTop("0em")
                .setRowNumbered(true)
                .setHeader([
                    {
                        "id" : "col1",
                        "caption" : "col1",
                        "type" : "input",
                        "width" : "8em"
                    },
                    {
                        "id" : "col2",
                        "caption" : "col2",
                        "type" : "listbox",
                        "width" : "8em"
                    },
                    {
                        "id" : "col3",
                        "caption" : "col3",
                        "type" : "input",
                        "width" : "8em"
                    },
                    {
                        "id" : "col4",
                        "caption" : "col4",
                        "type" : "input",
                        "width" : "8em"
                    }
                ])
                .setRows([
                   
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        // To determine how properties affects this module
        propSetAction : function(prop){
        }
    },
    // export
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        },
        $Functions:{
        }
    }
});