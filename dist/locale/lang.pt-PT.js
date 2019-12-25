var svgEditorLang_pt_PT = (function () {
  'use strict';

  var lang_ptPT = {
    lang: 'pt-PT',
    dir: 'ltr',
    common: {
      ok: 'Salvar',
      cancel: 'Cancelar',
      key_backspace: 'backspace',
      key_del: 'delete',
      key_down: 'down',
      key_up: 'up',
      more_opts: 'More Options',
      url: 'URL',
      width: 'Width',
      height: 'Height'
    },
    misc: {
      powered_by: 'Powered by'
    },
    ui: {
      toggle_stroke_tools: 'Show/hide more stroke tools',
      palette_info: 'Clique para mudar a cor de preenchimento, shift-clique para mudar a cor do curso',
      zoom_level: 'Alterar o nível de zoom',
      panel_drag: 'Drag left/right to resize side panel',
      quality: 'Quality:',
      pathNodeTooltip: 'Drag node to move it. Double-click node to change segment type',
      pathCtrlPtTooltip: 'Drag control point to adjust curve properties',
      pick_stroke_paint_opacity: 'Pick a Stroke Paint and Opacity',
      pick_fill_paint_opacity: 'Pick a Fill Paint and Opacity'
    },
    properties: {
      id: 'Identify the element',
      fill_color: 'Alterar a cor de preenchimento',
      stroke_color: 'Mudar a cor do curso',
      stroke_style: 'Alterar o estilo do traço do curso',
      stroke_width: 'Alterar a largura do curso',
      pos_x: 'Change X coordinate',
      pos_y: 'Change Y coordinate',
      linecap_butt: 'Linecap: Butt',
      linecap_round: 'Linecap: Round',
      linecap_square: 'Linecap: Square',
      linejoin_bevel: 'Linejoin: Bevel',
      linejoin_miter: 'Linejoin: Miter',
      linejoin_round: 'Linejoin: Round',
      angle: 'Alterar o ângulo de rotação',
      blur: 'Change gaussian blur value',
      opacity: 'Mude a opacidade item selecionado',
      circle_cx: 'Cx Mudar círculo de coordenadas',
      circle_cy: 'Círculo Mudança cy coordenar',
      circle_r: 'Alterar círculo de raio',
      ellipse_cx: 'Alterar elipse cx coordenar',
      ellipse_cy: 'Elipse Mudança cy coordenar',
      ellipse_rx: 'Raio X Change elipse',
      ellipse_ry: 'Raio y Change elipse',
      line_x1: 'Altere a linha de partida coordenada x',
      line_x2: 'Altere a linha está terminando coordenada x',
      line_y1: 'Mudança na linha de partida coordenada y',
      line_y2: 'Mudança de linha está terminando coordenada y',
      rect_height: 'Alterar altura do retângulo',
      rect_width: 'Alterar a largura retângulo',
      corner_radius: 'Alterar Corner Rectangle Radius',
      image_width: 'Alterar a largura da imagem',
      image_height: 'Alterar altura da imagem',
      image_url: 'Alterar URL',
      node_x: "Change node's x coordinate",
      node_y: "Change node's y coordinate",
      seg_type: 'Change Segment type',
      straight_segments: 'Straight',
      curve_segments: 'Curve',
      text_contents: 'Alterar o conteúdo de texto',
      font_family: 'Alterar fonte Família',
      font_size: 'Alterar tamanho de letra',
      bold: 'Bold Text',
      italic: 'Texto em itálico'
    },
    tools: {
      main_menu: 'Main Menu',
      bkgnd_color_opac: 'Mudar a cor de fundo / opacidade',
      connector_no_arrow: 'No arrow',
      fitToContent: 'Ajustar ao conteúdo',
      fit_to_all: 'Ajustar a todo o conteúdo',
      fit_to_canvas: 'Ajustar à tela',
      fit_to_layer_content: 'Ajustar o conteúdo da camada de',
      fit_to_sel: 'Ajustar à selecção',
      align_relative_to: 'Alinhar em relação a ...',
      relativeTo: 'em relação ao:',
      page: 'Página',
      largest_object: 'maior objeto',
      selected_objects: 'objetos eleitos',
      smallest_object: 'menor objeto',
      new_doc: 'Nova Imagem',
      open_doc: 'Abrir Imagem',
      export_img: 'Export',
      save_doc: 'Salvar Imagem',
      import_doc: 'Import Image',
      align_to_page: 'Align Element to Page',
      align_bottom: 'Align Bottom',
      align_center: 'Alinhar ao centro',
      align_left: 'Alinhar à Esquerda',
      align_middle: 'Alinhar Médio',
      align_right: 'Alinhar à Direita',
      align_top: 'Align Top',
      mode_select: 'Selecione a ferramenta',
      mode_fhpath: 'Ferramenta Lápis',
      mode_line: 'Ferramenta Linha',
      mode_rect: 'Rectangle Tool',
      mode_square: 'Square Tool',
      mode_fhrect: 'Free-Hand Rectangle',
      mode_ellipse: 'Elipse',
      mode_circle: 'Circle',
      mode_fhellipse: 'Free-Hand Ellipse',
      mode_path: 'Path Tool',
      mode_text: 'Ferramenta de Texto',
      mode_image: 'Image Tool',
      mode_zoom: 'Zoom Tool',
      no_embed: 'NOTE: This image cannot be embedded. It will depend on this path to be displayed',
      undo: 'Desfazer',
      redo: 'Refazer',
      tool_source: 'Fonte Editar',
      wireframe_mode: 'Wireframe Mode',
      clone: 'Clone Element(s)',
      del: 'Delete Element(s)',
      group_elements: 'Elementos do Grupo',
      make_link: 'Make (hyper)link',
      set_link_url: 'Set link URL (leave empty to remove)',
      to_path: 'Convert to Path',
      reorient_path: 'Reorient path',
      ungroup: 'Elementos Desagrupar',
      docprops: 'Propriedades do Documento',
      editor_homepage: 'SVG-Edit Home Page',
      move_bottom: 'Move to Bottom',
      move_top: 'Move to Top',
      node_clone: 'Clone Node',
      node_delete: 'Delete Node',
      node_link: 'Link Control Points',
      add_subpath: 'Add sub-path',
      openclose_path: 'Open/close sub-path',
      source_save: 'Salvar',
      cut: 'Cut',
      copy: 'Copy',
      paste: 'Paste',
      paste_in_place: 'Paste in Place',
      "delete": 'Delete',
      group: 'Group',
      move_front: 'Bring to Front',
      move_up: 'Bring Forward',
      move_down: 'Send Backward',
      move_back: 'Send to Back'
    },
    layers: {
      layer: 'Layer',
      layers: 'Layers',
      del: 'Delete Layer',
      move_down: 'Move camada para baixo',
      "new": 'New Layer',
      rename: 'Rename Layer',
      move_up: 'Move Layer Up',
      dupe: 'Duplicate Layer',
      merge_down: 'Merge Down',
      merge_all: 'Merge All',
      move_elems_to: 'Move elements to:',
      move_selected: 'Move selected elements to a different layer'
    },
    config: {
      image_props: 'Image Properties',
      doc_title: 'Title',
      doc_dims: 'Canvas Dimensions',
      included_images: 'Included Images',
      image_opt_embed: 'Embed data (local files)',
      image_opt_ref: 'Use file reference',
      editor_prefs: 'Editor Preferences',
      icon_size: 'Icon size',
      language: 'Language',
      background: 'Editor Background',
      editor_img_url: 'Image URL',
      editor_bg_note: 'Note: Background will not be saved with image.',
      icon_large: 'Large',
      icon_medium: 'Medium',
      icon_small: 'Small',
      icon_xlarge: 'Extra Large',
      select_predefined: 'Selecione predefinidos:',
      units_and_rulers: 'Units & Rulers',
      show_rulers: 'Show rulers',
      base_unit: 'Base Unit:',
      grid: 'Grid',
      snapping_onoff: 'Snapping on/off',
      snapping_stepsize: 'Snapping Step-Size:',
      grid_color: 'Grid color'
    },
    notification: {
      invalidAttrValGiven: 'Invalid value given',
      noContentToFitTo: 'No content to fit to',
      dupeLayerName: 'There is already a layer named that!',
      enterUniqueLayerName: 'Please enter a unique layer name',
      enterNewLayerName: 'Please enter the new layer name',
      layerHasThatName: 'Layer already has that name',
      QmoveElemsToLayer: "Move selected elements to layer '%s'?",
      QwantToClear: 'Do you want to clear the drawing?\nThis will also erase your undo history!',
      QwantToOpen: 'Do you want to open a new file?\nThis will also erase your undo history!',
      QerrorsRevertToSource: 'There were parsing errors in your SVG source.\nRevert back to original SVG source?',
      QignoreSourceChanges: 'Ignore changes made to SVG source?',
      featNotSupported: 'Feature not supported',
      enterNewImgURL: 'Enter the new image URL',
      defsFailOnSave: 'NOTE: Due to a bug in your browser, this image may appear wrong (missing gradients or elements). It will however appear correct once actually saved.',
      loadingImage: 'Loading image, please wait...',
      saveFromBrowser: "Select 'Save As...' in your browser (possibly via file menu or right-click context-menu) to save this image as a %s file.",
      noteTheseIssues: 'Also note the following issues: ',
      unsavedChanges: 'There are unsaved changes.',
      enterNewLinkURL: 'Enter the new hyperlink URL',
      errorLoadingSVG: 'Error: Unable to load SVG data',
      URLLoadFail: 'Unable to load from URL',
      retrieving: 'Retrieving \'%s\' ...',
      popupWindowBlocked: 'Popup window may be blocked by browser',
      exportNoBlur: 'Blurred elements will appear as un-blurred',
      exportNoforeignObject: 'foreignObject elements will not appear',
      exportNoDashArray: 'Strokes will appear filled',
      exportNoText: 'Text may not appear as expected'
    }
  };

  return lang_ptPT;

}());
