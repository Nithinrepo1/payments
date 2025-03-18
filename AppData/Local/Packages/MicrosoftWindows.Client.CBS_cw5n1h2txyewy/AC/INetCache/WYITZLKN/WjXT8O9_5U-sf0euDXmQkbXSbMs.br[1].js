var WSB;(function(n){const t="pp_",i=100,r=200;class u{constructor(t,i){this._page=t;this._sections=[];this._selectedItemIndex=-1;this._itemClickEventHandler=(t,i)=>{let r=document.getSelection();r.toString()&&r.focusNode==i.target||t.click(n.getCurrentTime(),n.getInputType(i))};this._contextMenuHandler=(t,r,u)=>{(r===null||r===void 0?void 0:r.shiftKey)&&this.blur(),r&&(r.pageX||r.pageY)?n.safeExecute(()=>i.showContextMenuOnXY(t,r.pageX,r.pageY,()=>this.focus(!1),n.getInputType(r),u),"contextMenuHandler"):n.safeExecute(()=>i.showContextMenuOnElement(t,u?_ge(u.id):_ge(t.id),()=>this.focus(!1),r?n.getInputType(r):0,u),"contextMenuHandler")};n.Host.bindSearchBoxGotFocus(()=>{this.blur()});n.Host.bindDismissed(()=>this.blur());n.Host.bindKeyDown(t=>{var i;this.hasFocus()&&(t==36||t==35)&&this.selectFirstOrLastItem(t==36);((i=this._selectedItem)===null||i===void 0?void 0:i.id)==n.PreviewMetadataContainerId&&t==13&&_ge(this._selectedItem.id).click()})}init(t){this._previewPaneViewModelParent=t;this._suggestionClickEventHandler=(t,i)=>{let r=n.getCurrentTime(),u=n.getInputType(i);this._previewPaneViewModelParent.onBeforeItemLaunch(r,u,4,null);t.click(r,u);this._previewPaneViewModelParent.onAfterItemLaunch(4)}}finalizeKeystroke(){this.instrumentOnPreviewPaneRendered(!1,!0)}instrumentOnPreviewPaneRendered(n,t){if(this._timestampFirstRender&&this._onPreviewPaneRendered){let i={firstRenderTS:this._timestampFirstRender,layout:this.getLayoutDataForPPRenderedInstrumentation()};this._onPreviewPaneRendered(t,!n,i)}}update(t,i,r,u,f,e,o){this._currentCallValid&&(this._currentCallValid.valid=!1);f&&(o||(this.instrumentOnPreviewPaneRendered(!1,!0),this._timestampFirstRender=null,this._settingsOnlineModules=[],this._settingsOnlineModulesRetrieved=!1),this._onPreviewPaneRendered=f);this._previewPaneId=u;this._previewedSuggestion=t;this._sections=[];this._hasPreviewIconBeenSet=!1;this._hasPrefixIconBeenSet=!1;this._haveActionsBeenFetched=!1;this._sectionRetrieved_jumplist=!1;this._sectionRetrieved_settingsFaq=!1;this._sectionRetrieved_settingsRelatedSettings=!1;this._allSectionsRetrieved=()=>this._sectionRetrieved_jumplist&&this._sectionRetrieved_settingsFaq&&this._sectionRetrieved_settingsRelatedSettings;let c=o&&this.hasFocus();const s=t=>{this._previewPaneViewModelParent.onResponseReceived(n.getCurrentTime());t?this.delayedRender():this.render();(this._previewPaneViewModelParent.focusPending||c)&&(this._previewPaneViewModelParent.focusPending=!1,this.focus(!1))};let h={valid:!0};this._currentCallValid=h;t&&this.updateSelection(t,i,()=>h.valid,()=>s(!1),()=>s(!0))}setPreviewIcon(t,i,u,f,e){let o=(n.TestHookUrlParameters===null||n.TestHookUrlParameters===void 0?void 0:n.TestHookUrlParameters.isTest)&&(n.TestHookUrlParameters===null||n.TestHookUrlParameters===void 0?void 0:n.TestHookUrlParameters.DisablePreviewGetIcon);if(!o){let r=4;n.config.newFilesPreviewPane&&((n.isDocument(t.type)||n.isPhoto(t.type))&&t.handoffType==2||n.config.addCopilotActionToBestMatch&&n.isCopilotSuggestion(t.type))&&(r=9);n.config.anticipateGetVerbsAsync?(t.getIcon(r,i=>{this._hasPreviewIconBeenSet=!0,t.previewIcon=i,(i===null||i===void 0?void 0:i.thumbnailType)==0&&(t.iconIsThumbnail=!0),n.populateImageRatio(t.previewIcon,t.type,()=>{},t.handoffType)}),this.getActions(i,f,e,u)):(t.getIcon(r,r=>{this._hasPreviewIconBeenSet=!0,t.previewIcon=r,(r===null||r===void 0?void 0:r.thumbnailType)==0&&(t.iconIsThumbnail=!0),n.populateImageRatio(t.previewIcon,t.type,()=>this.getActions(i,f,e,u),t.handoffType)}),n.config.newFilesPreviewPane&&t.getIcon(3,r=>{this._hasPrefixIconBeenSet=!0,t.prefixIcon=r,n.populateImageRatio(t.prefixIcon,t.type,()=>this.getActions(i,f,e,u))},!0))}!o&&(n.MockUrlParameters===null||n.MockUrlParameters===void 0?void 0:n.MockUrlParameters.isTest)||n.safeSetTimeout(()=>{this._hasPreviewIconBeenSet&&(this._hasPrefixIconBeenSet||!n.config.newFilesPreviewPane)||(this._hasPreviewIconBeenSet=!0,this._hasPrefixIconBeenSet=!0,t.previewIcon=n.ScopeConfig[n.getScope(n.getGroupType(t))].icon,n.populateImageRatio(t.previewIcon,t.type,()=>this.getActions(i,f,e,u)))},r,"setPreviewIcon")}updateSelection(t,i,r,u,f){t.getIcon?this.setPreviewIcon(t,i,r,u,f):(t.icon&&(t.previewIcon={content:t.icon.content,type:t.icon.type,bgColor:t.icon.bgColor,needsAccentColor:!0,ratio:t.icon.ratio,className:t.icon.className}),n.config.enableWinStoreAppDataProvider&&(t===null||t===void 0?void 0:t.storeAppCallback)?this.getStoreAppData(t,u,r):this.getActions(i,u,f,r))}hasFocus(){return!!this._selectedItem}focus(t){let i=this.getSelectableItems();if(i.length>0){let r=t?0:this._selectedItemIndex!=-1?this._selectedItemIndex:0,u=i[r];this.select(u,!1);n.Host.searchBoxHasFocus()&&n.Host.setFocusInWebView("localPP focus")}else this._previewPaneViewModelParent.focusPending=!0}readyToBlur(){return!0}blur(){this._selectedItem&&(this._selectedItem.selected=!1,this._selectedItem=null,this.render())}clear(){this._selectedItem=null;this._selectedItemIndex=-1;this._previewedSuggestion=null;this._onPreviewPaneRendered=null;this._sections=[];this._settingsOnlineModules=[];this._settingsOnlineModulesRetrieved=!1;sb_ct(this._renderTimer);this._hasPreviewIconBeenSet=!1;this._renderTimer=null;this.render()}getSelectableItems(){return[].concat(...this.getSelectableItemsByGroup())}getSelectableItemsByGroup(){var i;let t=[];if(n.isStore((i=this._previewedSuggestion)===null||i===void 0?void 0:i.type))n.PreviewAppStore&&Object.values(n.PreviewAppStore).forEach(n=>{document.getElementById(n.id)&&t.push([n])});else{document.getElementById(n.PreviewMetadataContainerId)&&t.push([n.PreviewMetadataContainer]);for(let n of this._sections){let i=[];i=i.concat(n.items);let r=n.collapsedItems.length>0;if(r){let t=_ge(n.collapsedItems[0].id).classList;t.contains("collapsedItem")||(i=i.concat(n.collapsedItems))}t.push(i);r&&t.push([n.expander])}for(let n of this._settingsOnlineModules)t.push(n.settingLinks)}return t}getSelectedItem(){return this._selectedItem}select(t,i){if(i){n.LogWSBError("selectPreviewPaneItem",null,new Error("Can't update search box value when selecting preview pane item"));return}if((this._selectedItem!=t||!this._selectedItem.selected)&&(this._selectedItem&&(this._selectedItem.selected=!1),t)){let i=this.getSelectableItems().findIndex(n=>n==t);if(i<0)n.LogWSBError("LocalPreviewPane.Select",null,new Error("select called on unknown item"));else{t.selected=!0;this._selectedItem=t;this._selectedItemIndex=i;this.render();let r=_ge(t.id);r&&(r.focus(),this._page.scrollToElement(r,n.StaticHtmlElements.qfPreviewScrollArea,n.StaticHtmlElements.qfPreviewScrollArea.offsetHeight),n.config.disbaleWideForLargeTextScale&&this._page.scrollToElementBottomHorizontalScrollBar(r,_qs(".resultsContainer"),_qs(".resultsContainer").offsetWidth))}}}onAfterKeyDown(t,i){return n.isContextMenuKey(t,i.shiftKey)?(this._contextMenuHandler(this._previewedSuggestion,null,this._selectedItem),!0):!1}selectFirstOrLastItem(n){let t=this.getSelectableItems();if(t.length!=0){let i=n?0:t.length-1;this.select(t[i],!1)}}isAnaheimDataSuggestionType(t){return t.type=="ANAH"||t.type=="ANAR"||t.type=="ANAT"||t.type=="ANAF"||t.type=="ANATH"&&n.config.topHitMuse}isAnaheimDataSuggestion(t){let i=n.getGroupType(t);return this.isAnaheimDataSuggestionType(t)&&(i==n.GroupType.SearchSuggestions||i==n.GroupType.AnaheimDataTopHit&&n.config.topHitMuse)}getAnaheimDataPreviewedSuggestion(n){let t;if(this.isAnaheimDataSuggestion(n)){t=Object.assign({},n);let i="https://"+HitHighlightingParser.removeMarkers(t.primaryMetadata),r=new URL(i);t.primaryMetadata=r.hostname}return t}getDataModel(){var t;if(this._previewedSuggestion){let r=this.getAnaheimDataPreviewedSuggestion(this._previewedSuggestion),u=this._previewedSuggestion.uninstallationInProgress?{messageText:n.Host.getLocString("UninstallationInProgress",HitHighlightingParser.removeMarkers(this._previewedSuggestion.text)),icon:{content:"&#xE946",type:2},messageClassName:"uninstallMessage"}:null,f=n.config.enableWinStoreAppDataProvider&&((t=this._previewedSuggestion)===null||t===void 0?void 0:t.previewPaneStatus)==0?!0:null,i=r?r:this._previewedSuggestion;n.config.enablePreviewSuggestionDup&&(i=Object.assign({},i));return{suggestion:i,sections:n.deepCopy(this._sections),suggestionClickHandler:this._suggestionClickEventHandler,itemClickHandler:this._itemClickEventHandler,contextMenuClickHandler:this._contextMenuHandler,settingsOnlineModules:n.deepCopy(this._settingsOnlineModules),messageDataModel:u,previewLocation:n.deepCopy(n.PreviewMetadataContainer),appStore:n.deepCopy(n.PreviewAppStore),isLoadingPage:f,modelBasedDisclaimerMessage:this.getDisclaimerMessageModel()}}return null}getDisclaimerMessageModel(){const t=n.config.disclaimerFeedbackUri,i=n.Host.getLocString("FeedbackUriText"),r=n.Host.getLocString("ModelDisclaimer"),u=()=>{n.Host.launchUriAsync(t),n.InstrumentationHelper.logClientInstEvent("Click","ModelBasedSearchFeedbackClick",undefined)};return{feedbackClickHandler:u,feedbackText:i,message:r}}render(){this._page.updatePreviewContainerView(this.getDataModel());this._previewedSuggestion&&(this._timestampFirstRender||(this._timestampFirstRender=n.getCurrentTime()),this.instrumentIfAllSectionsRetrieved())}instrumentIfAllSectionsRetrieved(){this._previewedSuggestion&&this._allSectionsRetrieved()&&this.instrumentOnPreviewPaneRendered(!0,!1)}delayedRender(){this._renderTimer||(this._renderTimer=n.safeSetTimeout(()=>{this.render(),this._renderTimer=null},i,"delayedRender"))}getStoreAppData(n,t,i){i()&&(this.render(),n.storeAppCallback(n).then(n=>{i()&&(this._previewedSuggestion=n,this._sectionRetrieved_jumplist=!0,this._sectionRetrieved_settingsFaq=!0,this._sectionRetrieved_settingsRelatedSettings=!0,t())}))}getActions(t,i,r,u){if(u()){let f=this._previewedSuggestion;if(!f||this._haveActionsBeenFetched){i();return}this._haveActionsBeenFetched=!0;n.config.addCopilotActionToBestMatch&&n.isCopilotSuggestion(f===null||f===void 0?void 0:f.type)||this.addToSection(this.createSyntheticAction(f),null,n.Host.getLocString("ActionsSection"));n.config.addCopilotActionToBestMatch&&n.isCopilotSuggestion(f===null||f===void 0?void 0:f.type)&&(n.isSetting(f===null||f===void 0?void 0:f.copilotSuggestionInBestMatchMirrorType)?this.addToSection(this.createCopilotAction(f,"SettingsAndTroubleshootingHelp",n.JumplistActionItemType.S_SettingsAndTroubleshootingHelp,{type:2,content:"&#xF106"}),null,n.Host.getLocString("ActionsSection")):n.isPhoto(f===null||f===void 0?void 0:f.copilotSuggestionInBestMatchMirrorType)?(this.addToSection(this.createCopilotAction(f,"DescribeThisImage",n.JumplistActionItemType.S_DescribeThisImage,{type:2,content:"&#xF106"}),null,n.Host.getLocString("ActionsSection")),this.addToSection(this.createCopilotAction(f,"SendToCopilot",n.JumplistActionItemType.S_SendToCopilot,{type:2,content:"&#xE901"}),null,n.Host.getLocString("ActionsSection"))):(this.addToSection(this.createCopilotAction(f,"SummarizeWithCopilot",n.JumplistActionItemType.S_SummarizeWithCopilot,{type:2,content:"&#xF106"}),null,n.Host.getLocString("ActionsSection")),this.addToSection(this.createCopilotAction(f,"SendToCopilot",n.JumplistActionItemType.S_SendToCopilot,{type:2,content:"&#xE901"}),null,n.Host.getLocString("ActionsSection"))));n.config.settingsOnlineModuleEnabled&&n.isSetting(f.type)&&f.deviceItem&&!this._settingsOnlineModulesRetrieved?n.fetchUrlJson(this.getRelatedSearchUrl(f.deviceItem.id,n.uiLanguageCache),null,null,n=>this.createSettingOnlineModules(n,u)):(this._sectionRetrieved_settingsFaq=!0,this._sectionRetrieved_settingsRelatedSettings=!0);n.getVerbsAsync("PreviewPaneExtraActions",f,n.config.rawVerbs,!0,n=>this.processVerbs(n,t,i,r,u),u)}}processVerbs(t,i,r,u,f){if(f()){const c=n.Host.getLocString("ActionsSection");let e=this._previewedSuggestion;t=n.extendVerbs(t,e,this._page,()=>this.render());let s=-1,o=-1,h=0;for(let n of t)n.verb==="copy"&&(s=h),n.verb==="S_CopyFullPath"&&(o=h),h++;if(s!=-1&&o!=-1){let n=t[o];s<o?(t.splice(o,1),t.splice(s+1,0,n)):(t.splice(s+1,0,n),t.splice(o,1))}for(let n of t)if(n.verb){let t=this.createAction(n);n.getIcon&&n.getIcon(1,n=>{t.icon=n,u()});this.addToSection(t,null,c)}n.config.addCopilotActionToActionList&&(n.isSetting(e.type)?this.addToSection(this.createCopilotAction(e,"SettingsAndTroubleshootingHelp",n.JumplistActionItemType.S_SettingsAndTroubleshootingHelp),null,n.Host.getLocString("ActionsSection")):n.isPhoto(e.type)?(this.addToSection(this.createCopilotAction(e,"DescribeThisImage",n.JumplistActionItemType.S_DescribeThisImage),null,n.Host.getLocString("ActionsSection")),this.addToSection(this.createCopilotAction(e,"SendToCopilot",n.JumplistActionItemType.S_SendToCopilot),null,n.Host.getLocString("ActionsSection"))):n.isSuggestionWithCopilotAction(e)&&(this.addToSection(this.createCopilotAction(e,"SummarizeWithCopilot",n.JumplistActionItemType.S_SummarizeWithCopilot),null,n.Host.getLocString("ActionsSection")),this.addToSection(this.createCopilotAction(e,"SendToCopilot",n.JumplistActionItemType.S_SendToCopilot),null,n.Host.getLocString("ActionsSection"))));this.processChildSuggestions(e,i,()=>{f()&&u()});this._sectionRetrieved_jumplist=!0;r()}}createSyntheticAction(t){let i="";var r=n.AccessTokenManager===null||n.AccessTokenManager===void 0?void 0:n.AccessTokenManager.getWindowsAccountType();i=t.type=="PPL"&&r!=2?n.Host.getLocString("OpenContact"):t.previewPaneType==1||this.isAnaheimDataSuggestion(t)?n.Host.getLocString("OpenInBrowser"):n.Host.getLocString("Open");let u={verb:n.JumplistActionItemType[n.JumplistActionItemType.S_Open],displayName:i,icon:{type:2,content:"&#xE8A7"},executeSync:()=>t.click(n.getCurrentTime(),0)};return this.createAction(u,n.GroupType.JumpListSynthetic)}createCopilotAction(t,i,r,u){let f=n.Host.getLocString(i),e={verb:n.JumplistActionItemType[r],displayName:f,icon:u,executeSync:()=>t.click(n.getCurrentTime(),0)};return this.createAction(e,n.GroupType.JumpListSynthetic,11,t)}composeCopilotUri(t,i){let r="&form=WSBPRE",f=t===null||t===void 0?void 0:t.path;!f||n.isCopilotSuggestion(t===null||t===void 0?void 0:t.type)||(r+="&file="+f);!!t.copilotSuggestionInBestMatchMirrorFilePath&&n.isCopilotSuggestion(t===null||t===void 0?void 0:t.type)&&(r+="&file="+t.copilotSuggestionInBestMatchMirrorFilePath);let u="";return i===n.JumplistActionItemType[n.JumplistActionItemType.S_SummarizeWithCopilot]?u="Summarize":i===n.JumplistActionItemType[n.JumplistActionItemType.S_SettingsAndTroubleshootingHelp]?u="SettingsAndTroubleshootingHelpQuery":i===n.JumplistActionItemType[n.JumplistActionItemType.S_DescribeThisImage]&&(u="DescribeThisImageQuery"),!u||n.isCopilotSuggestion(t===null||t===void 0?void 0:t.type)?i!==n.JumplistActionItemType[n.JumplistActionItemType.S_SendToCopilot]&&(r+="&q="+t.query):r+="&q="+n.Host.getLocString(u,`${t.query}`),r}createAction(i,r,u,f){let o=n.JumplistActionItemType[i.verb],e={ppId:this._previewPaneId,st:r||n.GroupType.JumpListActions,vbt:o||undefined,vbr:o?undefined:i.verb};return n.config.addCopilotActionToActionList&&u===11?{id:t+i.verb,text:i.displayName,click:(t,r)=>{this._previewPaneViewModelParent.onBeforeItemLaunch(t,r,u,e);n.Host.launchUriWithCopilotProtocalAsync(this.composeCopilotUri(f,i.verb));SearchAppWrapper.CortanaApp.dismissApp();this._previewPaneViewModelParent.onAfterItemLaunch(u)},icon:i.icon,selected:!1,narratorText:i.displayName,instData:e,isCopilotAction:!0}:{id:t+i.verb,text:i.displayName,click:(t,r)=>{const u=5;this._previewPaneViewModelParent.onBeforeItemLaunch(t,r,u,e);if(i.executeSync){n.safeExecute(()=>i.executeSync(),"verb.executeSync",null,i.verb);this._previewPaneViewModelParent.onAfterItemLaunch(u)}else n.Async.safeChain("verb.executeAsync",()=>i.executeAsync(),()=>this._previewPaneViewModelParent.onAfterItemLaunch(u),null,null,i.verb)},icon:i.icon,selected:!1,narratorText:i.displayName,instData:e}}processChildSuggestions(i,r,u){if(i&&(i.previewPaneType!=1||n.RuntimeConfig.MiniSERPMode!=0)){if(i.calculateChildSuggestions&&i.calculateChildSuggestions(),i.childSuggestions){let f=1;for(let e=0;e<i.childSuggestions.length;e++){let o=i.childSuggestions[e],h=o.groupType==n.GroupType.JumpListTasks,c={ppId:this._previewPaneId,st:o.groupType},s={id:t+i.id+"_"+e,text:HitHighlightingParser.removeMarkers(o.text),click:(n,t)=>{let i=h?5:6;this._previewPaneViewModelParent.onBeforeItemLaunch(n,t,i,c);o.click(n,t);this._previewPaneViewModelParent.onAfterItemLaunch(i)},icon:o.icon,selected:!1,narratorText:o.narratorText,annotationClass:"annotation",isJumpListTaskItem:!!h,instData:c},l,a;if(!h){let t=n.getGroupTitleAndNarratorText(r,o.groupType,o,null);s.tooltip=o.tooltip;l=t.title;a=t.narratorText;s.annotation=o.additionalInfoText}o.getIcon&&o.getIcon(1,t=>{s.icon=t,n.populateImageRatio(s.icon,o.type,()=>u())});this.addToSection(s,l,a,h?f++:null)}}n.config.itemsBeforeExpander&&this.processItemsForExpander()}}addToSection(n,t,i,r){let u=this._sections.find(n=>(n.title||"")==(t||""));u?typeof r=="number"?u.items.splice(r,0,n):u.items.push(n):(u={title:t,narratorText:i,items:[n],collapsedItems:[],expander:null},this._sections.push(u))}processItemsForExpander(){if(this._sections.length!=0){let i=(n,t,i)=>{n.pi=t,i&&(n.c=1)},t=this._sections.length,r=1;for(let u=0;u<t;u++){let f=this._sections[u],e=f.items;if(u==0){let t=!1,i=!1;for(let r=0;r<e.length;++r){let u=e[r];if(u.instData.st==n.GroupType.JumpListTasks){i=!0;break}else u.instData.st==n.GroupType.JumpListActions&&(t=!0)}f.sectionType=i?n.GroupType.JumpListTasks:t?n.GroupType.JumpListActions:n.GroupType.JumpListSynthetic}else f.sectionType=f.items[0].instData.st;if(u==0)for(let n=0;n<e.length;n++)n!=0&&!e[n].isJumpListTaskItem&&(t!=1||e[1].isJumpListTaskItem)&&(f.collapsedItems=e.splice(n),f.expander={id:"expander"+r++,selected:!1,text:null});else t!==u+1&&e.length>n.config.itemsBeforeExpander+1&&(f.collapsedItems=e.splice(n.config.itemsBeforeExpander),f.expander={id:"expander"+r++,selected:!1,text:null});let o=0;f.items.forEach(n=>i(n.instData,o++,!1));f.collapsedItems.forEach(n=>i(n.instData,o++,!0))}}}getLayoutDataForPPRenderedInstrumentation(){let n={sectionTypes:[],sectionLengths:[]};if(this._sections)for(let t of this._sections)n.sectionTypes.push(t.sectionType),n.sectionLengths.push(t.items.length+t.collapsedItems.length);if(this._settingsOnlineModules)for(let t of this._settingsOnlineModules)n.sectionTypes.push(t.sectionType),n.sectionLengths.push(t.settingLinks.length);return n.sectionTypes.length>0?n:undefined}onAnyOptionClick(n){this.select(n,!1);this.hasFocus||this.focus(!1)}getRelatedSearchUrl(t,i){return"/PPRelatedSearch?query="+n.encodeQueryParameter(t)+"&lang="+n.encodeQueryParameter(i)}createSettingOnlineModules(n,t){t()&&(this._settingsOnlineModulesRetrieved=!0,this.createSettingFaqModule(n),this.createSettingRelatedSettingsModuleAsync(n,t))}createSettingFaqModule(t){const r=n.Host.getLocString("SettingsFAQModuleHeader");let i=t&&t.SettingPageQnAs;if(i&&i.length>0){let t=[];for(let r=0;r<i.length;++r){const u=i[r];if(u.Query&&u.BingIALink){let i={ppId:this._previewPaneId,st:n.GroupType.JumpListSettingsFaq,pi:r},f={id:"faq"+r,narratorText:u.Query,selected:!1,text:u.Query,click:(t,r)=>{const f=9;this._previewPaneViewModelParent.onBeforeItemLaunch(t,r,f,i,0);n.Host.launchUrlWithEdgeProtocolAsync(u.BingIALink,{medium:"MSBLink"});this._previewPaneViewModelParent.onAfterItemLaunch(f)},instData:i};t.push(f)}}if(t.length>0){let i={header:r,settingLinks:t,sectionType:n.GroupType.JumpListSettingsFaq};this._settingsOnlineModules.push(i);this.render()}}this._sectionRetrieved_settingsFaq=!0;this.instrumentIfAllSectionsRetrieved()}createSettingRelatedSettingsModuleAsync(t,i){const u=n.Host.getLocString("RelatedSettingsModuleHeader");let r=t&&t.SettingPageRelatedSettingsIds;r&&r.length>0?n.LocalDataProvider.getSettings(r,t=>{if(i()){let i=[];for(let u=0;u<r.length;++u){const e=r[u],f=n.config.mapWrapperToJsMap&&t instanceof window.Map?t.get(e):t[e];if(f){let t={ppId:this._previewPaneId,st:n.GroupType.JumpListSettingsRelatedSettings,pi:u},r={id:e,narratorText:f.deviceItem.displayName,selected:!1,text:f.deviceItem.displayName,click:(i,r)=>{const u=9;this._previewPaneViewModelParent.onBeforeItemLaunch(i,r,u,t);n.Host.launchDeviceItemAsync(f.deviceItem,"THST");this._previewPaneViewModelParent.onAfterItemLaunch(u)},instData:t};i.push(r)}}if(i.length>0){let t={header:u,settingLinks:i,sectionType:n.GroupType.JumpListSettingsRelatedSettings};this._settingsOnlineModules.push(t);this.render()}this._sectionRetrieved_settingsRelatedSettings=!0;this.instrumentIfAllSectionsRetrieved()}}):(this._sectionRetrieved_settingsRelatedSettings=!0,this.instrumentIfAllSectionsRetrieved())}}n.WSBLocalPreviewPaneViewModel=u})(WSB||(WSB={}))