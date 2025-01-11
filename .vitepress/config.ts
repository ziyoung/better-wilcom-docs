import { defineConfig } from "vitepress";
import lightbox from "vitepress-plugin-lightbox";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Better Wilcom Docs Site",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
      { text: "Docs", link: "/wilcom-docs/" },
      { text: "Video", link: "/wilcom-videos/" },
      { text: "Glossary", link: "/wilcom-docs/glossary/glossary" },
    ],
    sidebar: {
      "/wilcom-docs": [
        {
          text: "EmbroideryStudio e4 | Online Help",
          link: "/wilcom-docs/PART_Help/PART_Help",
          collapsed: true,
        },
        {
          text: "Product Differentiation",
          link: "/wilcom-docs/Levels/PART_Levels/PART_Levels",
          items: [
            {
              text: "Product differentiation table",
              link: "/wilcom-docs/Levels/prodiff_table/Product_differentiation_table",
            },
            {
              text: "Modular elements",
              link: "/wilcom-docs/Levels/elements/Modular_elements",
              items: [
                {
                  text: "Included features",
                  link: "/wilcom-docs/Levels/elements/Included_features",
                },
              ],
            },
          ],
          collapsed: true,
        },
        {
          text: "What’s New in EmbroideryStudio e4?",
          link: "/wilcom-docs/New_features/PART_Release/PART_Release",
          items: [
            {
              text: "What’s new in ES e4.5?",
              link: "/wilcom-docs/New_features/rn_-_update-4/What%E2%80%99s_new_in_ES_e4_5",
              items: [
                {
                  text: "What’s new in ES e4.5.8?",
                  link: "/wilcom-docs/New_features/rn_-_update-4/What%E2%80%99s_new_in_ES_e4_5_8",
                },
                {
                  text: "What’s new in ES e4.5.7?",
                  link: "/wilcom-docs/New_features/rn_-_update-4/What%E2%80%99s_new_in_ES_e4_5_7",
                },
                {
                  text: "What’s new in ES e4.5.6?",
                  link: "/wilcom-docs/New_features/rn_-_update-4/What%E2%80%99s_new_in_ES_e4_5_6",
                },
                {
                  text: "What’s new in ES e4.5.5?",
                  link: "/wilcom-docs/New_features/rn_-_update-4/What%E2%80%99s_new_in_ES_e4_5_5",
                  items: [
                    {
                      text: "General improvements",
                      link: "/wilcom-docs/New_features/rn_-_update-4/General_improvements",
                    },
                    {
                      text: "Editing issues",
                      link: "/wilcom-docs/New_features/rn_-_update-4/Editing_issues",
                    },
                    {
                      text: "TBF machine file issues",
                      link: "/wilcom-docs/New_features/rn_-_update-4/TBF_machine_file_issues",
                    },
                    {
                      text: "Other machine file issues",
                      link: "/wilcom-docs/New_features/rn_-_update-4/Other_machine_file_issues",
                    },
                    {
                      text: "System errors",
                      link: "/wilcom-docs/New_features/rn_-_update-4/System_errors",
                    },
                  ],
                },
                {
                  text: "What’s new in ES e4.5.4?",
                  link: "/wilcom-docs/New_features/rn_-_update-4/What%E2%80%99s_new_in_ES_e4_5_4",
                  items: [
                    {
                      text: "Editing improvements",
                      link: "/wilcom-docs/New_features/rn_-_update-4/Editing_improvements",
                    },
                    {
                      text: "Sequin improvements",
                      link: "/wilcom-docs/New_features/rn_-_update-4/Sequin_improvements",
                    },
                    {
                      text: "PES file improvements",
                      link: "/wilcom-docs/New_features/rn_-_update-4/PES_file_improvements",
                    },
                    {
                      text: "Machine connection improvements",
                      link: "/wilcom-docs/New_features/rn_-_update-4/Machine_connection_improvements",
                    },
                    {
                      text: "Lettering improvements",
                      link: "/wilcom-docs/New_features/rn_-_update-4/Lettering_improvements",
                    },
                    {
                      text: "New and updated thread charts",
                      link: "/wilcom-docs/New_features/rn_-_update-4/New_and_updated_thread_charts",
                    },
                    {
                      text: "Other improvements",
                      link: "/wilcom-docs/New_features/rn_-_update-4/Other_improvements",
                    },
                  ],
                },
                {
                  text: "What’s new in ES e4.5.3?",
                  link: "/wilcom-docs/New_features/rn_-_update-4/What%E2%80%99s_new_in_ES_e4_5_3",
                  items: [
                    {
                      text: "General improvements",
                      link: "/wilcom-docs/New_features/rn_-_update-4/General_improvements1",
                    },
                    {
                      text: "EmbroideryConnect networking",
                      link: "/wilcom-docs/New_features/rn_-_update-4/EmbroideryConnect_networking",
                    },
                    {
                      text: "Stitching improvements & new features",
                      link: "/wilcom-docs/New_features/rn_-_update-4/Stitching_improvements_new_features",
                    },
                    {
                      text: "Auto-digitizing improvements",
                      link: "/wilcom-docs/New_features/rn_-_update-4/Auto-digitizing_improvements",
                    },
                    {
                      text: "Sequin improvements & new features",
                      link: "/wilcom-docs/New_features/rn_-_update-4/Sequin_improvements_new_features",
                    },
                  ],
                },
                {
                  text: "What’s new in ES e4.5.2?",
                  link: "/wilcom-docs/New_features/rn_-_update-4/What%E2%80%99s_new_in_ES_e4_5_2",
                },
                {
                  text: "What’s new in ES e4.5.1?",
                  link: "/wilcom-docs/New_features/rn_-_update-4/What%E2%80%99s_new_in_ES_e4_5_1",
                  items: [
                    {
                      text: "General improvements",
                      link: "/wilcom-docs/New_features/rn_-_update-4/General_improvements2",
                    },
                    {
                      text: "New Beading Element",
                      link: "/wilcom-docs/New_features/rn_-_update-4/New_Beading_Element",
                    },
                    {
                      text: "Dahao support",
                      link: "/wilcom-docs/New_features/rn_-_update-4/Dahao_support",
                    },
                    {
                      text: "EmbroideryConnect networking",
                      link: "/wilcom-docs/New_features/rn_-_update-4/EmbroideryConnect_networking1",
                    },
                    {
                      text: "Digitizing improvements",
                      link: "/wilcom-docs/New_features/rn_-_update-4/Digitizing_improvements",
                    },
                    {
                      text: "Auto-digitizing improvements",
                      link: "/wilcom-docs/New_features/rn_-_update-4/Auto-digitizing_improvements1",
                    },
                    {
                      text: "Lettering improvements",
                      link: "/wilcom-docs/New_features/rn_-_update-4/Lettering_improvements1",
                    },
                    {
                      text: "Sequin improvements",
                      link: "/wilcom-docs/New_features/rn_-_update-4/Sequin_improvements1",
                    },
                    {
                      text: "System & file improvements",
                      link: "/wilcom-docs/New_features/rn_-_update-4/System_file_improvements",
                    },
                  ],
                },
              ],
            },
            {
              text: "What’s new in ES e4.2?",
              link: "/wilcom-docs/New_features/rn_-_update-3/What%E2%80%99s_new_in_ES_e4_2",
              items: [
                {
                  text: "General improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-3/General_improvements",
                },
                {
                  text: "Lettering improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-3/Lettering_improvements",
                },
                {
                  text: "Thread & color improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-3/Thread_color_improvements",
                },
                {
                  text: "Digitizing improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-3/Digitizing_improvements",
                },
                {
                  text: "Stitch quality improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-3/Stitch_quality_improvements",
                },
                {
                  text: "System performance improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-3/System_performance_improvements",
                },
                {
                  text: "Output improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-3/Output_improvements",
                },
              ],
            },
            {
              text: "What’s new in ES e4.1?",
              link: "/wilcom-docs/New_features/rn_-_update-2/What%E2%80%99s_new_in_ES_e4_1",
              items: [
                {
                  text: "New ES Ordering",
                  link: "/wilcom-docs/New_features/rn_-_update-2/New_ES_Ordering",
                },
                {
                  text: "New product elements",
                  link: "/wilcom-docs/New_features/rn_-_update-2/New_product_elements",
                },
                {
                  text: "WiFi USB machine networking",
                  link: "/wilcom-docs/New_features/rn_-_update-2/WiFi_USB_machine_networking",
                },
                {
                  text: "Design Library refinements",
                  link: "/wilcom-docs/New_features/rn_-_update-2/Design_Library_refinements",
                  items: [
                    {
                      text: "Faster and more precise design searches",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Faster_and_more_precise_design_searches",
                    },
                    {
                      text: "Manage folders in the library from a single control",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Manage_folders_in_the_library_from_a_single_control",
                    },
                    {
                      text: "Extended support for CorelDRAW CDR graphics files",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Extended_support_for_CorelDRAW_CDR_graphics_files",
                    },
                  ],
                },
                {
                  text: "Drag-and-drop EMB designs from the new clipart docker",
                  link: "/wilcom-docs/New_features/rn_-_update-2/Drag-and-drop_EMB_designs_from_the_new_clipart_docker",
                },
                {
                  text: "Order Job Feature improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-2/Order_Job_Feature_improvements",
                  items: [
                    {
                      text: "Customize order information on approval sheets",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Customize_order_information_on_approval_sheets",
                    },
                    {
                      text: "New Order tab Color/Size/Quantity table",
                      link: "/wilcom-docs/New_features/rn_-_update-2/New_Order_tab_Color_Size_Quantity_table",
                    },
                    {
                      text: "Improved product visualization",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Improved_product_visualization",
                    },
                    {
                      text: "Create new colorways with the color wheel",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Create_new_colorways_with_the_color_wheel",
                    },
                  ],
                },
                {
                  text: "Digitizing tools",
                  link: "/wilcom-docs/New_features/rn_-_update-2/Digitizing_tools",
                  items: [
                    {
                      text: "Create offsets with open objects",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Create_offsets_with_open_objects",
                    },
                    {
                      text: "Define Column C width in offset objects",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Define_Column_C_width_in_offset_objects",
                    },
                    {
                      text: "Improved options for ‘duplicate with offset’",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Improved_options_for_%E2%80%98duplicate_with_offset%E2%80%99",
                    },
                    {
                      text: "Easy access to Remove Overlaps settings",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Easy_access_to_Remove_Overlaps_settings",
                    },
                    {
                      text: "Reinstated outline tools",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Reinstated_outline_tools",
                    },
                    {
                      text: "Preset styles for traditional tools",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Preset_styles_for_traditional_tools",
                    },
                  ],
                },
                {
                  text: "New & improved stitch types & effects",
                  link: "/wilcom-docs/New_features/rn_-_update-2/New_improved_stitch_types_effects",
                  items: [
                    {
                      text: "Extended Sculpture Run",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Extended_Sculpture_Run",
                    },
                    {
                      text: "New String stitch",
                      link: "/wilcom-docs/New_features/rn_-_update-2/New_String_stitch",
                    },
                    {
                      text: "Cording",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Cording",
                    },
                  ],
                },
                {
                  text: "Improved contour fills",
                  link: "/wilcom-docs/New_features/rn_-_update-2/Improved_contour_fills",
                  items: [
                    {
                      text: "New even density contour fill",
                      link: "/wilcom-docs/New_features/rn_-_update-2/New_even_density_contour_fill",
                    },
                    {
                      text: "Improved simple contour stitch corners",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Improved_simple_contour_stitch_corners",
                    },
                    {
                      text: "Offset fill",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Offset_fill",
                    },
                  ],
                },
                {
                  text: "Improved motif runs & fills",
                  link: "/wilcom-docs/New_features/rn_-_update-2/Improved_motif_runs_fills",
                  items: [
                    {
                      text: "Graded motif size & spacing in motif runs",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Graded_motif_size_spacing_in_motif_runs",
                    },
                    {
                      text: "New motif column",
                      link: "/wilcom-docs/New_features/rn_-_update-2/New_motif_column",
                    },
                  ],
                },
                {
                  text: "Improved sequin fills",
                  link: "/wilcom-docs/New_features/rn_-_update-2/Improved_sequin_fills",
                  items: [
                    {
                      text: "Pattern stamp re-coloring of twin-sequin fills",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Pattern_stamp_re-coloring_of_twin-sequin_fills",
                    },
                    {
                      text: "Smooth edges in sequin fills",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Smooth_edges_in_sequin_fills",
                    },
                    {
                      text: "Better default values for sequin fills",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Better_default_values_for_sequin_fills",
                    },
                    {
                      text: "Custom sequin shapes & hole positions",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Custom_sequin_shapes_hole_positions",
                    },
                    {
                      text: "Custom sequin fixings",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Custom_sequin_fixings",
                    },
                  ],
                },
                {
                  text: "Auto-digitizing quality improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-2/Auto-digitizing_quality_improvements",
                  items: [
                    {
                      text: "Support for image transparencies",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Support_for_image_transparencies",
                    },
                    {
                      text: "Improved color reduction for logo type artwork",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Improved_color_reduction_for_logo_type_artwork",
                    },
                    {
                      text: "Finalize crop command",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Finalize_crop_command",
                    },
                  ],
                },
                {
                  text: "Design output improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-2/Design_output_improvements",
                  items: [
                    {
                      text: "Easy access to machine file export",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Easy_access_to_machine_file_export",
                    },
                    {
                      text: "Support for Barudan FDR-3 design format",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Support_for_Barudan_FDR-3_design_format",
                    },
                    {
                      text: "Improved error handling of EMB files",
                      link: "/wilcom-docs/New_features/rn_-_update-2/Improved_error_handling_of_EMB_files",
                    },
                  ],
                },
              ],
            },
            {
              text: "What’s new in ES e4.0 Update 1?",
              link: "/wilcom-docs/New_features/rn_-_update-1/What%E2%80%99s_new_in_ES_e4_0_Update_1",
              items: [
                {
                  text: "Design Library improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-1/Design_Library_improvements",
                },
                {
                  text: "Team Name improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-1/Team_Name_improvements",
                },
                {
                  text: "Lettering improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-1/Lettering_improvements",
                },
                {
                  text: "Digitizing improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-1/Digitizing_improvements",
                },
                {
                  text: "Visualization improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-1/Visualization_improvements",
                },
                {
                  text: "Usability improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-1/Usability_improvements",
                },
                {
                  text: "Output improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-1/Output_improvements",
                },
                {
                  text: "Graphics handling improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-1/Graphics_handling_improvements",
                },
                {
                  text: "LOTE improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-1/LOTE_improvements",
                },
                {
                  text: "System improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-1/System_improvements",
                },
              ],
            },
            {
              text: "What’s new in ES e4.0?",
              link: "/wilcom-docs/New_features/rn_-_update-0/What%E2%80%99s_new_in_ES_e4_0",
              items: [
                {
                  text: "Improved ES design workspace",
                  link: "/wilcom-docs/New_features/rn_-_update-0/Improved_ES_design_workspace",
                  items: [
                    {
                      text: "Improved color palette",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Improved_color_palette",
                    },
                    {
                      text: "New hoop template",
                      link: "/wilcom-docs/New_features/rn_-_update-0/New_hoop_template",
                    },
                    {
                      text: "New My Threads docker",
                      link: "/wilcom-docs/New_features/rn_-_update-0/New_My_Threads_docker",
                    },
                  ],
                },
                {
                  text: "New Design Library",
                  link: "/wilcom-docs/New_features/rn_-_update-0/New_Design_Library",
                  items: [
                    {
                      text: "Design Library operates within the main ES window",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Design_Library_operates_within_the_main_ES_window",
                    },
                    {
                      text: "Design Library can show all designs in all folders",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Design_Library_can_show_all_designs_in_all_folders",
                    },
                    {
                      text: "Fast search for designs via any text in filename, folder, or design file properties",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Fast_search_for_designs_via_any_text_in_filename_folder_or",
                    },
                    {
                      text: "Display lists of designs in several different layouts",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Display_lists_of_designs_in_several_different_layouts",
                    },
                    {
                      text: "List designs with thumbnail and contents details",
                      link: "/wilcom-docs/New_features/rn_-_update-0/List_designs_with_thumbnail_and_contents_details",
                    },
                    {
                      text: "List designs in a table with user selected details visible",
                      link: "/wilcom-docs/New_features/rn_-_update-0/List_designs_with_thumbnail_and_contents_details?rhtocid=_2_4_1_5#TOC_List_designs_in_a_tablebc-1",
                    },
                    {
                      text: "An integral part of the ES Order Job Feature",
                      link: "/wilcom-docs/New_features/rn_-_update-0/An_integral_part_of_the_ES_Order_Job_Feature",
                    },
                  ],
                },
                {
                  text: "New EMB Job Order Details",
                  link: "/wilcom-docs/New_features/rn_-_update-0/New_EMB_Job_Order_Details",
                  items: [
                    {
                      text: "Use the EMB Job Order Details to Prepare and Track Jobs",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Use_the_EMB_Job_Order_Details_to_Prepare_and_Track_Jobs",
                    },
                    {
                      text: "New Improved Design Approval Process",
                      link: "/wilcom-docs/New_features/rn_-_update-0/New_Improved_Design_Approval_Process",
                    },
                  ],
                },
                {
                  text: "Improved Product Visualizer",
                  link: "/wilcom-docs/New_features/rn_-_update-0/Improved_Product_Visualizer",
                  items: [
                    {
                      text: "New High Resolution Re-colorable predefined product images",
                      link: "/wilcom-docs/New_features/rn_-_update-0/New_High_Resolution_Re-colorable_predefined_product_images",
                    },
                    {
                      text: "Add your own pre-coloured or re-colourable product images",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Add_your_own_pre-coloured_or_re-colourable_product_images",
                    },
                    {
                      text: "Easier to select and use Product images",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Add_your_own_pre-coloured_or_re-colourable_product_images?rhtocid=_2_4_3_2#TOC_Easier_to_select_and_usebc-1",
                    },
                  ],
                },
                {
                  text: "New & improved lettering",
                  link: "/wilcom-docs/New_features/rn_-_update-0/New_improved_lettering",
                  items: [
                    {
                      text: "Additional lettering fonts of various styles",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Additional_lettering_fonts_of_various_styles",
                    },
                    {
                      text: "Improved font selection user interface",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Improved_font_selection_user_interface",
                    },
                    {
                      text: "Improved Team Names feature",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Improved_Team_Names_feature",
                    },
                    {
                      text: "Kerning tables for more fonts",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Kerning_tables_for_more_fonts",
                    },
                    {
                      text: "Improved auto-digitizing of TrueType fonts",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Improved_auto-digitizing_of_TrueType_fonts",
                    },
                    {
                      text: "New & improved monogramming",
                      link: "/wilcom-docs/New_features/rn_-_update-0/New_improved_monogramming",
                    },
                  ],
                },
                {
                  text: "New & improved digitizing",
                  link: "/wilcom-docs/New_features/rn_-_update-0/New_improved_digitizing",
                  items: [
                    {
                      text: "New graphics style plus traditional digitizing",
                      link: "/wilcom-docs/New_features/rn_-_update-0/New_graphics_style_plus_traditional_digitizing",
                    },
                    {
                      text: "New graphics digitizing style",
                      link: "/wilcom-docs/New_features/rn_-_update-0/New_graphics_digitizing_style",
                    },
                    {
                      text: "Improved traditional digitizing",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Improved_traditional_digitizing",
                    },
                    {
                      text: "New standard stitch types",
                      link: "/wilcom-docs/New_features/rn_-_update-0/New_standard_stitch_types",
                    },
                    {
                      text: "New & improved technical stitching",
                      link: "/wilcom-docs/New_features/rn_-_update-0/New_improved_technical_stitching",
                    },
                    {
                      text: "New & improved creative stitching",
                      link: "/wilcom-docs/New_features/rn_-_update-0/New_improved_creative_stitching",
                    },
                    {
                      text: "Improved Auto Appliqué",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Improved_Auto_Appliqu%C3%A9",
                    },
                    {
                      text: "Improved Add Border",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Improved_Add_Border",
                    },
                    {
                      text: "Dim graphics",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Dim_graphics",
                    },
                  ],
                },
                {
                  text: "New & improved automatic digitizing",
                  link: "/wilcom-docs/New_features/rn_-_update-0/New_improved_automatic_digitizing",
                  items: [
                    {
                      text: "Improved vector & bitmap auto-digitizing",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Improved_vector_bitmap_auto-digitizing",
                    },
                    {
                      text: "Automated stitch estimates",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Automated_stitch_estimates",
                    },
                    {
                      text: "Improved image preparation",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Improved_image_preparation",
                    },
                    {
                      text: "New Color PhotoStitch",
                      link: "/wilcom-docs/New_features/rn_-_update-0/New_Color_PhotoStitch",
                    },
                    {
                      text: "Better quality satin stitch conversion",
                      link: "/wilcom-docs/New_features/rn_-_update-0/Better_quality_satin_stitch_conversion",
                    },
                  ],
                },
                {
                  text: "Other improvements",
                  link: "/wilcom-docs/New_features/rn_-_update-0/Other_improvements",
                },
              ],
            },
          ],
          collapsed: true,
        },
        {
          text: "Object-Based Embroidery",
          link: "/wilcom-docs/Basics/PART_Basics/PART_Basics",
          items: [
            {
              text: "Basic Procedures",
              link: "/wilcom-docs/Basics/basics/Basic_Procedures",
              items: [
                {
                  text: "Operating modes",
                  link: "/wilcom-docs/Basics/basics/Operating_modes",
                  items: [
                    {
                      text: "Home screen",
                      link: "/wilcom-docs/Basics/basics/Home_screen",
                    },
                    {
                      text: "Wilcom Workspace window",
                      link: "/wilcom-docs/Basics/basics/Wilcom_Workspace_window",
                    },
                    {
                      text: "CorelDRAW Graphics window",
                      link: "/wilcom-docs/Basics/basics/CorelDRAW_Graphics_window",
                    },
                    {
                      text: "Design library",
                      link: "/wilcom-docs/Basics/basics/Design_library",
                    },
                  ],
                },
                {
                  text: "Toolbars & dockers",
                  link: "/wilcom-docs/Basics/basics/Toolbars_dockers",
                  items: [
                    {
                      text: "Access toolbars",
                      link: "/wilcom-docs/Basics/basics/Access_toolbars",
                    },
                    {
                      text: "Work with dockers",
                      link: "/wilcom-docs/Basics/basics/Work_with_dockers",
                    },
                    {
                      text: "Access object properties",
                      link: "/wilcom-docs/Basics/basics/Access_object_properties",
                    },
                  ],
                },
                {
                  text: "Embroidery machine formats",
                  link: "/wilcom-docs/Basics/basics/Embroidery_machine_formats",
                },
                {
                  text: "Embroidery file formats",
                  link: "/wilcom-docs/Basics/basics/Embroidery_file_formats",
                  items: [
                    {
                      text: "Design files",
                      link: "/wilcom-docs/Basics/basics/Design_files",
                    },
                    {
                      text: "Machine files",
                      link: "/wilcom-docs/Basics/basics/Machine_files",
                    },
                    {
                      text: "File sources",
                      link: "/wilcom-docs/Basics/basics/File_sources",
                    },
                  ],
                },
                {
                  text: "Working with design files",
                  link: "/wilcom-docs/Basics/basics/Working_with_design_files",
                  items: [
                    {
                      text: "Open designs",
                      link: "/wilcom-docs/Basics/basics/Open_designs",
                    },
                    {
                      text: "Create designs from templates",
                      link: "/wilcom-docs/Basics/basics/Create_designs_from_templates",
                    },
                    {
                      text: "Save & close designs",
                      link: "/wilcom-docs/Basics/basics/Save_close_designs",
                    },
                    {
                      text: "Send designs as email attachments",
                      link: "/wilcom-docs/Basics/basics/Send_designs_as_email_attachments",
                    },
                  ],
                },
                {
                  text: "Selecting objects",
                  link: "/wilcom-docs/Basics/basics/Selecting_objects",
                  items: [
                    {
                      text: "Select objects with selection tools",
                      link: "/wilcom-docs/Basics/basics/Select_objects_with_selection_tools",
                    },
                    {
                      text: "Select objects with Color-Object List",
                      link: "/wilcom-docs/Basics/basics/Select_objects_with_Color-Object_List",
                    },
                  ],
                },
                {
                  text: "Measurements",
                  link: "/wilcom-docs/Basics/basics/Measurements",
                  items: [
                    {
                      text: "Display grids, rulers & guides",
                      link: "/wilcom-docs/Basics/basics/Display_grids_rulers_guides",
                    },
                    {
                      text: "Set measurement units",
                      link: "/wilcom-docs/Basics/basics/Set_measurement_units",
                    },
                    {
                      text: "Measure distances on screen",
                      link: "/wilcom-docs/Basics/basics/Measure_distances_on_screen",
                    },
                  ],
                },
              ],
            },
            {
              text: "Viewing Designs",
              link: "/wilcom-docs/Basics/view/Viewing_Designs",
              items: [
                {
                  text: "Viewing design components",
                  link: "/wilcom-docs/Basics/view/Viewing_design_components",
                  items: [
                    {
                      text: "View embroidery components",
                      link: "/wilcom-docs/Basics/view/View_embroidery_components",
                    },
                    {
                      text: "View graphical components",
                      link: "/wilcom-docs/Basics/view/View_graphical_components",
                    },
                    {
                      text: "Zoom & pan designs",
                      link: "/wilcom-docs/Basics/view/Zoom_pan_designs",
                    },
                    {
                      text: "Set up multiple views",
                      link: "/wilcom-docs/Basics/view/Set_up_multiple_views",
                    },
                    {
                      text: "Work with the Overview Window",
                      link: "/wilcom-docs/Basics/view/Work_with_the_Overview_Window",
                    },
                  ],
                },
                {
                  text: "Viewing objects & color blocks",
                  link: "/wilcom-docs/Basics/view/Viewing_objects_color_blocks",
                  items: [
                    {
                      text: "View selected objects",
                      link: "/wilcom-docs/Basics/view/View_selected_objects",
                    },
                    {
                      text: "View selected color blocks",
                      link: "/wilcom-docs/Basics/view/View_selected_color_blocks",
                    },
                  ],
                },
                {
                  text: "Viewing stitching sequence",
                  link: "/wilcom-docs/Basics/view/Viewing_stitching_sequence",
                  items: [
                    {
                      text: "Simulate design stitchouts",
                      link: "/wilcom-docs/Basics/view/Simulate_design_stitchouts",
                    },
                    {
                      text: "Travel through designs",
                      link: "/wilcom-docs/Basics/view/Travel_through_designs",
                    },
                    {
                      text: "Select objects while traveling",
                      link: "/wilcom-docs/Basics/view/Select_objects_while_traveling",
                    },
                  ],
                },
                {
                  text: "Viewing colorways",
                  link: "/wilcom-docs/Basics/view/Viewing_colorways",
                  items: [
                    {
                      text: "Switch colorways",
                      link: "/wilcom-docs/Basics/view/Switch_colorways",
                    },
                    {
                      text: "Change backgrounds",
                      link: "/wilcom-docs/Basics/view/Change_backgrounds",
                    },
                    {
                      text: "Change display colors",
                      link: "/wilcom-docs/Basics/view/Change_display_colors",
                    },
                  ],
                },
                {
                  text: "Viewing design repeats",
                  link: "/wilcom-docs/Basics/view/Viewing_design_repeats",
                },
                {
                  text: "Viewing design information",
                  link: "/wilcom-docs/Basics/view/Viewing_design_information",
                  items: [
                    {
                      text: "View design details in EmbroideryStudio",
                      link: "/wilcom-docs/Basics/view/View_design_details_in_EmbroideryStudio",
                    },
                    {
                      text: "View design details in File Explorer",
                      link: "/wilcom-docs/Basics/view/View_design_details_in_File_Explorer",
                    },
                    {
                      text: "Preview design reports",
                      link: "/wilcom-docs/Basics/view/Preview_design_reports",
                    },
                  ],
                },
              ],
            },
            {
              text: "Threads & Charts",
              link: "/wilcom-docs/Basics/threads/Threads_Charts",
              items: [
                {
                  text: "Choosing threads",
                  link: "/wilcom-docs/Basics/threads/Choosing_threads",
                  items: [
                    {
                      text: "Select thread colors",
                      link: "/wilcom-docs/Basics/threads/Select_thread_colors",
                    },
                    {
                      text: "Assign thread colors",
                      link: "/wilcom-docs/Basics/threads/Assign_thread_colors",
                    },
                    {
                      text: "Thread usage estimates",
                      link: "/wilcom-docs/Basics/threads/Thread_usage_estimates",
                    },
                  ],
                },
                {
                  text: "Recoloring consecutive objects",
                  link: "/wilcom-docs/Basics/threads/Recoloring_consecutive_objects",
                },
                {
                  text: "Managing thread charts",
                  link: "/wilcom-docs/Basics/threads/Managing_thread_charts",
                  items: [
                    {
                      text: "Edit thread colors",
                      link: "/wilcom-docs/Basics/threads/Edit_thread_colors",
                    },
                    {
                      text: "Create & modify thread charts",
                      link: "/wilcom-docs/Basics/threads/Create_modify_thread_charts",
                    },
                    {
                      text: "Copy colors between charts",
                      link: "/wilcom-docs/Basics/threads/Copy_colors_between_charts",
                    },
                    {
                      text: "Modify thread details",
                      link: "/wilcom-docs/Basics/threads/Modify_thread_details",
                    },
                    {
                      text: "Definine custom thread chart files",
                      link: "/wilcom-docs/Basics/threads/Definine_custom_thread_chart_files",
                    },
                    {
                      text: "Save default thread charts to template",
                      link: "/wilcom-docs/Basics/threads/Save_default_thread_charts_to_template",
                    },
                  ],
                },
              ],
            },
          ],
          collapsed: true,
        },
        {
          text: "Hardware & Software Setup",
          link: "/wilcom-docs/Setup/PART_Setup/PART_Setup",
          items: [
            {
              text: "System Settings",
              link: "/wilcom-docs/Setup/settings/System_Settings",
              items: [
                {
                  text: "General options",
                  link: "/wilcom-docs/Setup/settings/General_options",
                  items: [
                    {
                      text: "Automatic save & backup options",
                      link: "/wilcom-docs/Setup/settings/Automatic_save_backup_options",
                    },
                    {
                      text: "Pointer position display",
                      link: "/wilcom-docs/Setup/settings/Pointer_position_display",
                    },
                    {
                      text: "Thread color handling for inserted files",
                      link: "/wilcom-docs/Setup/settings/Thread_color_handling_for_inserted_files",
                    },
                    {
                      text: "Paste & duplicate options",
                      link: "/wilcom-docs/Setup/settings/Paste_duplicate_options",
                    },
                    {
                      text: "Digitizing presets",
                      link: "/wilcom-docs/Setup/settings/Digitizing_presets",
                    },
                    {
                      text: "Toolbar display options",
                      link: "/wilcom-docs/Setup/settings/Toolbar_display_options",
                    },
                    {
                      text: "Font list display options",
                      link: "/wilcom-docs/Setup/settings/Font_list_display_options",
                    },
                    {
                      text: "Object property apply options",
                      link: "/wilcom-docs/Setup/settings/Object_property_apply_options",
                    },
                    {
                      text: "Other general options",
                      link: "/wilcom-docs/Setup/settings/Other_general_options",
                    },
                  ],
                },
                {
                  text: "View options",
                  link: "/wilcom-docs/Setup/settings/View_options",
                  items: [
                    {
                      text: "Design viewing options",
                      link: "/wilcom-docs/Setup/settings/Design_viewing_options",
                    },
                    {
                      text: "Image viewing options",
                      link: "/wilcom-docs/Setup/settings/Image_viewing_options",
                    },
                    {
                      text: "Show auto-start & end points",
                      link: "/wilcom-docs/Setup/settings/Show_auto-start_end_points",
                    },
                  ],
                },
                {
                  text: "Grid display options",
                  link: "/wilcom-docs/Setup/settings/Grid_display_options",
                  items: [
                    {
                      text: "Grid display options",
                      link: "/wilcom-docs/Setup/settings/Grid_display_options1",
                    },
                    {
                      text: "Ruler & guide display options",
                      link: "/wilcom-docs/Setup/settings/Ruler_guide_display_options",
                    },
                  ],
                },
                {
                  text: "Scroll options",
                  link: "/wilcom-docs/Setup/settings/Scroll_options",
                },
                {
                  text: "Reshape options",
                  link: "/wilcom-docs/Setup/settings/Reshape_options",
                },
                {
                  text: "Warning options",
                  link: "/wilcom-docs/Setup/settings/Warning_options",
                },
              ],
            },
            {
              text: "Hardware Settings",
              link: "/wilcom-docs/Setup/hardware/Hardware_Settings",
              items: [
                {
                  text: "Calibrating the monitor",
                  link: "/wilcom-docs/Setup/hardware/Calibrating_the_monitor",
                },
                {
                  text: "Peripheral device connections",
                  link: "/wilcom-docs/Setup/hardware/Peripheral_device_connections",
                },
                {
                  text: "Setting up machines for Connection Manager",
                  link: "/wilcom-docs/Setup/hardware/Setting_up_machines_for_Connection_Manager",
                  items: [
                    {
                      text: "Set up machines",
                      link: "/wilcom-docs/Setup/hardware/Set_up_machines",
                    },
                    {
                      text: "Automatic machine file naming",
                      link: "/wilcom-docs/Setup/hardware/Automatic_machine_file_naming",
                    },
                  ],
                },
                {
                  text: "Setting up machines for Stitch Manager",
                  link: "/wilcom-docs/Setup/hardware/Setting_up_machines_for_Stitch_Manager",
                  items: [
                    {
                      text: "Set up machines",
                      link: "/wilcom-docs/Setup/hardware/Set_up_machines1",
                    },
                    {
                      text: "Enter serial port settings",
                      link: "/wilcom-docs/Setup/hardware/Enter_serial_port_settings",
                    },
                  ],
                },
                {
                  text: "Doing runtime estimates",
                  link: "/wilcom-docs/Setup/hardware/Doing_runtime_estimates",
                  items: [
                    {
                      text: "Configure machine runtime settings",
                      link: "/wilcom-docs/Setup/hardware/Configure_machine_runtime_settings",
                    },
                    {
                      text: "Output design information to CSV",
                      link: "/wilcom-docs/Setup/hardware/Output_design_information_to_CSV",
                    },
                    {
                      text: "Print runtime estimates",
                      link: "/wilcom-docs/Setup/hardware/Print_runtime_estimates",
                    },
                  ],
                },
                {
                  text: "Setting up scanners",
                  link: "/wilcom-docs/Setup/hardware/Setting_up_scanners",
                },
                {
                  text: "Connecting digitizing tablets",
                  link: "/wilcom-docs/Setup/hardware/Connecting_digitizing_tablets",
                  items: [
                    {
                      text: "Set up digitizing tablets",
                      link: "/wilcom-docs/Setup/hardware/Set_up_digitizing_tablets",
                    },
                    {
                      text: "Customize digitizing tablet formats",
                      link: "/wilcom-docs/Setup/hardware/Customize_digitizing_tablet_formats",
                    },
                    {
                      text: "Prepare enlargement drawings",
                      link: "/wilcom-docs/Setup/hardware/Prepare_enlargement_drawings",
                    },
                    {
                      text: "Register enlargement drawings",
                      link: "/wilcom-docs/Setup/hardware/Register_enlargement_drawings",
                    },
                    {
                      text: "Change drawing scales",
                      link: "/wilcom-docs/Setup/hardware/Change_drawing_scales",
                    },
                    {
                      text: "Shift enlargement drawings",
                      link: "/wilcom-docs/Setup/hardware/Shift_enlargement_drawings",
                    },
                    {
                      text: "Use digitizing pucks",
                      link: "/wilcom-docs/Setup/hardware/Use_digitizing_pucks",
                    },
                  ],
                },
              ],
            },
            {
              text: "Machine Formats",
              link: "/wilcom-docs/Setup/machines/Machine_Formats",
              items: [
                {
                  text: "Standard machine formats",
                  link: "/wilcom-docs/Setup/machines/Standard_machine_formats",
                  items: [
                    {
                      text: "Stitch & jump length settings",
                      link: "/wilcom-docs/Setup/machines/Stitch_jump_length_settings",
                    },
                    {
                      text: "Trim functions",
                      link: "/wilcom-docs/Setup/machines/Trim_functions",
                    },
                    {
                      text: "Color-change functions",
                      link: "/wilcom-docs/Setup/machines/Color-change_functions",
                    },
                    {
                      text: "Borer functions",
                      link: "/wilcom-docs/Setup/machines/Borer_functions",
                    },
                    {
                      text: "End-of-design functions",
                      link: "/wilcom-docs/Setup/machines/End-of-design_functions",
                    },
                  ],
                },
                {
                  text: "Advanced machine formats",
                  link: "/wilcom-docs/Setup/machines/Advanced_machine_formats",
                  items: [
                    {
                      text: "Color-change sequence",
                      link: "/wilcom-docs/Setup/machines/Color-change_sequence",
                    },
                    {
                      text: "Start/end-of-design sequence",
                      link: "/wilcom-docs/Setup/machines/Start_end-of-design_sequence",
                    },
                    {
                      text: "Speed options",
                      link: "/wilcom-docs/Setup/machines/Speed_options",
                    },
                    {
                      text: "Miscellaneous advanced options",
                      link: "/wilcom-docs/Setup/machines/Miscellaneous_advanced_options",
                    },
                  ],
                },
                {
                  text: "Custom machine formats",
                  link: "/wilcom-docs/Setup/machines/Custom_machine_formats",
                },
              ],
            },
          ],
          collapsed: true,
        },
        {
          text: "Embroidery Digitizing",
          link: "/wilcom-docs/Digitizing/PART_Digitizing/PART_Digitizing",
          items: [
            {
              text: "Stitch Types",
              link: "/wilcom-docs/Digitizing/stitches/Stitch_Types",
              items: [
                {
                  text: "Simple outlines",
                  link: "/wilcom-docs/Digitizing/stitches/Simple_outlines",
                  items: [
                    {
                      text: "Simple run stitching",
                      link: "/wilcom-docs/Digitizing/stitches/Simple_run_stitching",
                    },
                    {
                      text: "Stitch length settings",
                      link: "/wilcom-docs/Digitizing/stitches/Stitch_length_settings",
                    },
                    {
                      text: "Run count setting",
                      link: "/wilcom-docs/Digitizing/stitches/Run_count_setting",
                    },
                    {
                      text: "Sculpture run settings",
                      link: "/wilcom-docs/Digitizing/stitches/Sculpture_run_settings",
                    },
                  ],
                },
                {
                  text: "Satin stitching",
                  link: "/wilcom-docs/Digitizing/stitches/Satin_stitching",
                  items: [
                    {
                      text: "Applying satin stitch",
                      link: "/wilcom-docs/Digitizing/stitches/Applying_satin_stitch",
                    },
                    {
                      text: "Satin auto-spacing",
                      link: "/wilcom-docs/Digitizing/stitches/Satin_auto-spacing",
                    },
                    {
                      text: "Satin fixed spacing",
                      link: "/wilcom-docs/Digitizing/stitches/Satin_fixed_spacing",
                    },
                    {
                      text: "Satin stitch count",
                      link: "/wilcom-docs/Digitizing/stitches/Satin_stitch_count",
                    },
                  ],
                },
                {
                  text: "Tatami stitching",
                  link: "/wilcom-docs/Digitizing/stitches/Tatami_stitching",
                  items: [
                    {
                      text: "Tatami density",
                      link: "/wilcom-docs/Digitizing/stitches/Tatami_density",
                    },
                    {
                      text: "Other tatami settings",
                      link: "/wilcom-docs/Digitizing/stitches/Other_tatami_settings",
                    },
                  ],
                },
                {
                  text: "Decorative embroidery",
                  link: "/wilcom-docs/Digitizing/stitches/Decorative_embroidery",
                  items: [
                    {
                      text: "Decorative outlines",
                      link: "/wilcom-docs/Digitizing/stitches/Decorative_outlines",
                    },
                    {
                      text: "Border stitching",
                      link: "/wilcom-docs/Digitizing/stitches/Border_stitching",
                    },
                    {
                      text: "Patterned stitching",
                      link: "/wilcom-docs/Digitizing/stitches/Patterned_stitching",
                    },
                    {
                      text: "Curved stitching",
                      link: "/wilcom-docs/Digitizing/stitches/Curved_stitching",
                    },
                    {
                      text: "Specialty stitching",
                      link: "/wilcom-docs/Digitizing/stitches/Specialty_stitching",
                    },
                    {
                      text: "Motif stitching",
                      link: "/wilcom-docs/Digitizing/stitches/Motif_stitching",
                    },
                  ],
                },
              ],
            },
            {
              text: "Digitizing Shapes",
              link: "/wilcom-docs/Digitizing/input/Digitizing_Shapes",
              items: [
                {
                  text: "Embroidery digitizing",
                  link: "/wilcom-docs/Digitizing/input/Embroidery_digitizing",
                  items: [
                    {
                      text: "Digitizing methods",
                      link: "/wilcom-docs/Digitizing/input/Digitizing_methods",
                    },
                    {
                      text: "Reference points & reshape nodes",
                      link: "/wilcom-docs/Digitizing/input/Reference_points_reshape_nodes",
                    },
                    {
                      text: "Join methods",
                      link: "/wilcom-docs/Digitizing/input/Join_methods",
                    },
                    {
                      text: "Generate stitches",
                      link: "/wilcom-docs/Digitizing/input/Generate_stitches",
                    },
                  ],
                },
                {
                  text: "Digitizing with graphical tools",
                  link: "/wilcom-docs/Digitizing/input/Digitizing_with_graphical_tools",
                  items: [
                    {
                      text: "Digitize regular shapes",
                      link: "/wilcom-docs/Digitizing/input/Digitize_regular_shapes",
                    },
                    {
                      text: "Digitize open & closed shapes",
                      link: "/wilcom-docs/Digitizing/input/Digitize_open_closed_shapes",
                    },
                  ],
                },
                {
                  text: "Digitizing outlines & details",
                  link: "/wilcom-docs/Digitizing/input/Digitizing_outlines_details",
                },
                {
                  text: "Digitizing regular columns",
                  link: "/wilcom-docs/Digitizing/input/Digitizing_regular_columns",
                  items: [
                    {
                      text: "Create columns & borders",
                      link: "/wilcom-docs/Digitizing/input/Create_columns_borders",
                    },
                    {
                      text: "Adjust column width & offset",
                      link: "/wilcom-docs/Digitizing/input/Adjust_column_width_offset",
                    },
                    {
                      text: "Set corner fractions",
                      link: "/wilcom-docs/Digitizing/input/Set_corner_fractions",
                    },
                    {
                      text: "Set angles & orientation",
                      link: "/wilcom-docs/Digitizing/input/Set_angles_orientation",
                    },
                  ],
                },
                {
                  text: "Digitizing irregular columns",
                  link: "/wilcom-docs/Digitizing/input/Digitizing_irregular_columns",
                  items: [
                    {
                      text: "Digitize columns of varying width",
                      link: "/wilcom-docs/Digitizing/input/Digitize_columns_of_varying_width",
                    },
                    {
                      text: "Create smooth joins",
                      link: "/wilcom-docs/Digitizing/input/Create_smooth_joins",
                    },
                    {
                      text: "Digitize columns of turning stitches",
                      link: "/wilcom-docs/Digitizing/input/Digitize_columns_of_turning_stitches",
                    },
                  ],
                },
                {
                  text: "Creating free-form shapes",
                  link: "/wilcom-docs/Digitizing/input/Creating_free-form_shapes",
                  items: [
                    {
                      text: "Digitize free-form shapes",
                      link: "/wilcom-docs/Digitizing/input/Digitize_free-form_shapes",
                    },
                    {
                      text: "Add holes to free-form shapes",
                      link: "/wilcom-docs/Digitizing/input/Add_holes_to_free-form_shapes",
                    },
                    {
                      text: "Set nominal angles",
                      link: "/wilcom-docs/Digitizing/input/Set_nominal_angles",
                    },
                    {
                      text: "Adjust segment overlaps",
                      link: "/wilcom-docs/Digitizing/input/Adjust_segment_overlaps",
                    },
                    {
                      text: "Adjust travel margins",
                      link: "/wilcom-docs/Digitizing/input/Adjust_travel_margins",
                    },
                  ],
                },
              ],
            },
            {
              text: "Object Properties",
              link: "/wilcom-docs/Digitizing/properties/Object_Properties",
              items: [
                {
                  text: "Basic concepts",
                  link: "/wilcom-docs/Digitizing/properties/Basic_concepts",
                },
                {
                  text: "Working with object properties",
                  link: "/wilcom-docs/Digitizing/properties/Working_with_object_properties",
                  items: [
                    {
                      text: "Change current settings",
                      link: "/wilcom-docs/Digitizing/properties/Change_current_settings",
                    },
                    {
                      text: "Change object properties",
                      link: "/wilcom-docs/Digitizing/properties/Change_object_properties",
                    },
                    {
                      text: "Copy properties",
                      link: "/wilcom-docs/Digitizing/properties/Copy_properties",
                    },
                  ],
                },
                {
                  text: "Working with fabrics",
                  link: "/wilcom-docs/Digitizing/properties/Working_with_fabrics",
                  items: [
                    {
                      text: "Change fabrics",
                      link: "/wilcom-docs/Digitizing/properties/Change_fabrics",
                    },
                    {
                      text: "Manage fabrics",
                      link: "/wilcom-docs/Digitizing/properties/Manage_fabrics",
                    },
                  ],
                },
                {
                  text: "Working with styles",
                  link: "/wilcom-docs/Digitizing/properties/Working_with_styles",
                  items: [
                    {
                      text: "Apply styles",
                      link: "/wilcom-docs/Digitizing/properties/Apply_styles",
                    },
                    {
                      text: "Define styles",
                      link: "/wilcom-docs/Digitizing/properties/Define_styles",
                    },
                    {
                      text: "Modify styles",
                      link: "/wilcom-docs/Digitizing/properties/Modify_styles",
                    },
                    {
                      text: "Assign favorites",
                      link: "/wilcom-docs/Digitizing/properties/Assign_favorites",
                    },
                  ],
                },
                {
                  text: "Working with templates",
                  link: "/wilcom-docs/Digitizing/properties/Working_with_templates",
                  items: [
                    {
                      text: "Save current properties to a template",
                      link: "/wilcom-docs/Digitizing/properties/Save_current_properties_to_a_template",
                    },
                    {
                      text: "Create design templates",
                      link: "/wilcom-docs/Digitizing/properties/Create_design_templates",
                    },
                    {
                      text: "Modify design templates",
                      link: "/wilcom-docs/Digitizing/properties/Modify_design_templates",
                    },
                    {
                      text: "Revert to the NORMAL template",
                      link: "/wilcom-docs/Digitizing/properties/Revert_to_the_NORMAL_template",
                    },
                  ],
                },
              ],
            },
            {
              text: "Colorways",
              link: "/wilcom-docs/Digitizing/colorways/Colorways",
              items: [
                {
                  text: "Creating colorways",
                  link: "/wilcom-docs/Digitizing/colorways/Creating_colorways",
                  items: [
                    {
                      text: "Add colorways",
                      link: "/wilcom-docs/Digitizing/colorways/Add_colorways",
                    },
                    {
                      text: "Change color schemes",
                      link: "/wilcom-docs/Digitizing/colorways/Change_color_schemes",
                    },
                  ],
                },
                {
                  text: "Color blocks & stop sequence",
                  link: "/wilcom-docs/Digitizing/colorways/Color_blocks_stop_sequence",
                  items: [
                    {
                      text: "Design thread colors",
                      link: "/wilcom-docs/Digitizing/colorways/Design_thread_colors",
                    },
                    {
                      text: "Name design elements",
                      link: "/wilcom-docs/Digitizing/colorways/Name_design_elements",
                    },
                    {
                      text: "Split color blocks",
                      link: "/wilcom-docs/Digitizing/colorways/Split_color_blocks",
                    },
                  ],
                },
                {
                  text: "Fabric & product backgrounds",
                  link: "/wilcom-docs/Digitizing/colorways/Fabric_product_backgrounds",
                  items: [
                    {
                      text: "Set fabric backgrounds",
                      link: "/wilcom-docs/Digitizing/colorways/Set_fabric_backgrounds",
                    },
                    {
                      text: "Visualize products",
                      link: "/wilcom-docs/Digitizing/colorways/Visualize_products",
                    },
                  ],
                },
              ],
            },
          ],
          collapsed: true,
        },
        {
          text: "Modifying Designs",
          link: "/wilcom-docs/Modifying/PART_Modifying/PART_Modifying",
          items: [
            {
              text: "Combining Objects",
              link: "/wilcom-docs/Modifying/combine/Combining_Objects",
              items: [
                {
                  text: "Combining objects & designs",
                  link: "/wilcom-docs/Modifying/combine/Combining_objects_designs",
                  items: [
                    {
                      text: "Insert designs",
                      link: "/wilcom-docs/Modifying/combine/Insert_designs",
                    },
                    {
                      text: "Copy & paste objects",
                      link: "/wilcom-docs/Modifying/combine/Copy_paste_objects",
                    },
                    {
                      text: "Duplicate & clone objects",
                      link: "/wilcom-docs/Modifying/combine/Duplicate_clone_objects",
                    },
                    {
                      text: "Nest objects",
                      link: "/wilcom-docs/Modifying/combine/Nest_objects",
                    },
                  ],
                },
                {
                  text: "Grouping & locking objects",
                  link: "/wilcom-docs/Modifying/combine/Grouping_locking_objects",
                  items: [
                    {
                      text: "Group & ungroup objects",
                      link: "/wilcom-docs/Modifying/combine/Group_ungroup_objects",
                    },
                    {
                      text: "Lock & unlock objects",
                      link: "/wilcom-docs/Modifying/combine/Lock_unlock_objects",
                    },
                    {
                      text: "Select objects within groups",
                      link: "/wilcom-docs/Modifying/combine/Select_objects_within_groups",
                    },
                  ],
                },
                {
                  text: "Selecting objects by color or stitch type",
                  link: "/wilcom-docs/Modifying/combine/Selecting_objects_by_color_or_stitch_type",
                  items: [
                    {
                      text: "Select objects by color",
                      link: "/wilcom-docs/Modifying/combine/Select_objects_by_color",
                    },
                    {
                      text: "Select objects by stitch type",
                      link: "/wilcom-docs/Modifying/combine/Select_objects_by_stitch_type",
                    },
                  ],
                },
                {
                  text: "Sequencing embroidery objects",
                  link: "/wilcom-docs/Modifying/combine/Sequencing_embroidery_objects",
                  items: [
                    {
                      text: "Sequence by cut-and-paste",
                      link: "/wilcom-docs/Modifying/combine/Sequence_by_cut-and-paste",
                    },
                    {
                      text: "Sequence with the Color-Object List",
                      link: "/wilcom-docs/Modifying/combine/Sequence_with_the_Color-Object_List",
                    },
                    {
                      text: "Sequence selected objects",
                      link: "/wilcom-docs/Modifying/combine/Sequence_selected_objects",
                    },
                    {
                      text: "Auto-sequence entire designs",
                      link: "/wilcom-docs/Modifying/combine/Auto-sequence_entire_designs",
                    },
                    {
                      text: "Sequence by color",
                      link: "/wilcom-docs/Modifying/combine/Sequence_by_color",
                    },
                    {
                      text: "Sequence by selection order",
                      link: "/wilcom-docs/Modifying/combine/Sequence_by_selection_order",
                    },
                    {
                      text: "Sequence by number",
                      link: "/wilcom-docs/Modifying/combine/Sequence_by_number",
                    },
                  ],
                },
              ],
            },
            {
              text: "Transforming Objects",
              link: "/wilcom-docs/Modifying/transform/Transforming_Objects",
              items: [
                {
                  text: "Arranging objects",
                  link: "/wilcom-docs/Modifying/transform/Arranging_objects",
                  items: [
                    {
                      text: "Position objects",
                      link: "/wilcom-docs/Modifying/transform/Position_objects",
                    },
                    {
                      text: "Align objects",
                      link: "/wilcom-docs/Modifying/transform/Align_objects",
                    },
                    {
                      text: "Distribute objects evenly",
                      link: "/wilcom-docs/Modifying/transform/Distribute_objects_evenly",
                    },
                  ],
                },
                {
                  text: "Scaling objects",
                  link: "/wilcom-docs/Modifying/transform/Scaling_objects",
                  items: [
                    {
                      text: "Scale objects interactively",
                      link: "/wilcom-docs/Modifying/transform/Scale_objects_interactively",
                    },
                    {
                      text: "Scale objects numerically",
                      link: "/wilcom-docs/Modifying/transform/Scale_objects_numerically",
                    },
                    {
                      text: "Scale objects by reference line",
                      link: "/wilcom-docs/Modifying/transform/Scale_objects_by_reference_line",
                    },
                    {
                      text: "Make objects the same size",
                      link: "/wilcom-docs/Modifying/transform/Make_objects_the_same_size",
                    },
                  ],
                },
                {
                  text: "Rotating objects",
                  link: "/wilcom-docs/Modifying/transform/Rotating_objects",
                  items: [
                    {
                      text: "Rotate objects interactively",
                      link: "/wilcom-docs/Modifying/transform/Rotate_objects_interactively",
                    },
                    {
                      text: "Rotate objects numerically",
                      link: "/wilcom-docs/Modifying/transform/Rotate_objects_numerically",
                    },
                    {
                      text: "Rotate objects by reference line",
                      link: "/wilcom-docs/Modifying/transform/Rotate_objects_by_reference_line",
                    },
                    {
                      text: "Rotate objects by reference line and angle",
                      link: "/wilcom-docs/Modifying/transform/Rotate_objects_by_reference_line_and_angle",
                    },
                  ],
                },
                {
                  text: "Skewing objects",
                  link: "/wilcom-docs/Modifying/transform/Skewing_objects",
                },
                {
                  text: "Mirroring objects",
                  link: "/wilcom-docs/Modifying/transform/Mirroring_objects",
                  items: [
                    {
                      text: "Flip objects horizontally & vertically",
                      link: "/wilcom-docs/Modifying/transform/Flip_objects_horizontally_vertically",
                    },
                    {
                      text: "Mirror objects around an axis",
                      link: "/wilcom-docs/Modifying/transform/Mirror_objects_around_an_axis",
                    },
                  ],
                },
              ],
            },
            {
              text: "Productivity Techniques",
              link: "/wilcom-docs/Modifying/productivity/Productivity_Techniques",
              items: [
                {
                  text: "Adding preset shapes",
                  link: "/wilcom-docs/Modifying/productivity/Adding_preset_shapes",
                  items: [
                    {
                      text: "Add design borders",
                      link: "/wilcom-docs/Modifying/productivity/Add_design_borders",
                    },
                    {
                      text: "Digitize stars & rings",
                      link: "/wilcom-docs/Modifying/productivity/Digitize_stars_rings",
                    },
                    {
                      text: "Digitize basic shapes",
                      link: "/wilcom-docs/Modifying/productivity/Digitize_basic_shapes",
                    },
                  ],
                },
                {
                  text: "Adding & filling holes",
                  link: "/wilcom-docs/Modifying/productivity/Adding_filling_holes",
                  items: [
                    {
                      text: "Add & remove holes",
                      link: "/wilcom-docs/Modifying/productivity/Add_remove_holes",
                    },
                    {
                      text: "Fill holes",
                      link: "/wilcom-docs/Modifying/productivity/Fill_holes",
                    },
                  ],
                },
                {
                  text: "Generating outlines & offsets",
                  link: "/wilcom-docs/Modifying/productivity/Generating_outlines_offsets",
                  items: [
                    {
                      text: "Simple offsets",
                      link: "/wilcom-docs/Modifying/productivity/Simple_offsets",
                    },
                    {
                      text: "Create outlines & offsets",
                      link: "/wilcom-docs/Modifying/productivity/Create_outlines_offsets",
                    },
                    {
                      text: "Create negative offsets",
                      link: "/wilcom-docs/Modifying/productivity/Create_negative_offsets",
                    },
                    {
                      text: "Create offsets with open objects",
                      link: "/wilcom-docs/Modifying/productivity/Create_offsets_with_open_objects",
                    },
                  ],
                },
                {
                  text: "Mirroring & reflecting selections",
                  link: "/wilcom-docs/Modifying/productivity/Mirroring_reflecting_selections",
                  items: [
                    {
                      text: "Mirror selections horizontally & vertically",
                      link: "/wilcom-docs/Modifying/productivity/Mirror_selections_horizontally_vertically",
                    },
                    {
                      text: "Create multiple reflections",
                      link: "/wilcom-docs/Modifying/productivity/Create_multiple_reflections",
                    },
                    {
                      text: "Create wreaths",
                      link: "/wilcom-docs/Modifying/productivity/Create_wreaths",
                    },
                  ],
                },
                {
                  text: "Creating design arrays",
                  link: "/wilcom-docs/Modifying/productivity/Creating_design_arrays",
                },
              ],
            },
            {
              text: "Reshaping Objects",
              link: "/wilcom-docs/Modifying/reshape/Reshaping_Objects",
              items: [
                {
                  text: "Reshaping embroidery objects",
                  link: "/wilcom-docs/Modifying/reshape/Reshaping_embroidery_objects",
                  items: [
                    {
                      text: "View control points",
                      link: "/wilcom-docs/Modifying/reshape/View_control_points",
                    },
                    {
                      text: "Reshape objects with reshape-nodes",
                      link: "/wilcom-docs/Modifying/reshape/Reshape_objects_with_reshape-nodes",
                    },
                    {
                      text: "Reshape objects with Bézier controls",
                      link: "/wilcom-docs/Modifying/reshape/Reshape_objects_with_B%C3%A9zier_controls",
                    },
                    {
                      text: "Reshape Column C objects",
                      link: "/wilcom-docs/Modifying/reshape/Reshape_Column_C_objects",
                    },
                  ],
                },
                {
                  text: "Reshaping stars & rings",
                  link: "/wilcom-docs/Modifying/reshape/Reshaping_stars_rings",
                  items: [
                    {
                      text: "Reshape star objects",
                      link: "/wilcom-docs/Modifying/reshape/Reshape_star_objects",
                    },
                    {
                      text: "Reshape ring objects",
                      link: "/wilcom-docs/Modifying/reshape/Reshape_ring_objects",
                    },
                  ],
                },
                {
                  text: "Applying envelopes",
                  link: "/wilcom-docs/Modifying/reshape/Applying_envelopes",
                },
                {
                  text: "Splitting objects",
                  link: "/wilcom-docs/Modifying/reshape/Splitting_objects",
                  items: [
                    {
                      text: "Break apart composite objects",
                      link: "/wilcom-docs/Modifying/reshape/Break_apart_composite_objects",
                    },
                    {
                      text: "Cut shapes manually",
                      link: "/wilcom-docs/Modifying/reshape/Cut_shapes_manually",
                    },
                    {
                      text: "Cut shapes automatically",
                      link: "/wilcom-docs/Modifying/reshape/Cut_shapes_automatically",
                    },
                  ],
                },
                {
                  text: "Shaping objects",
                  link: "/wilcom-docs/Modifying/reshape/Shaping_objects",
                  items: [
                    {
                      text: "Shaping tools summary table",
                      link: "/wilcom-docs/Modifying/reshape/Shaping_tools_summary_table",
                    },
                    {
                      text: "Merge vector & embroidery objects",
                      link: "/wilcom-docs/Modifying/reshape/Merge_vector_embroidery_objects",
                    },
                    {
                      text: "Trim vector & embroidery objects",
                      link: "/wilcom-docs/Modifying/reshape/Trim_vector_embroidery_objects",
                    },
                    {
                      text: "Split vector & embroidery objects",
                      link: "/wilcom-docs/Modifying/reshape/Split_vector_embroidery_objects",
                    },
                    {
                      text: "Preserve original objects",
                      link: "/wilcom-docs/Modifying/reshape/Preserve_original_objects",
                    },
                  ],
                },
              ],
            },
            {
              text: "Stitches & Machine Functions",
              link: "/wilcom-docs/Modifying/functions/Stitches_Machine_Functions",
              items: [
                {
                  text: "Selecting & editing stitches",
                  link: "/wilcom-docs/Modifying/functions/Selecting_editing_stitches",
                  items: [
                    {
                      text: "Select stitches by needle point",
                      link: "/wilcom-docs/Modifying/functions/Select_stitches_by_needle_point",
                    },
                    {
                      text: "Select stitches with the Stitch List",
                      link: "/wilcom-docs/Modifying/functions/Select_stitches_with_the_Stitch_List",
                    },
                    {
                      text: "Select stitches while traveling",
                      link: "/wilcom-docs/Modifying/functions/Select_stitches_while_traveling",
                    },
                    {
                      text: "Insert stitches",
                      link: "/wilcom-docs/Modifying/functions/Insert_stitches",
                    },
                    {
                      text: "Edit stitches",
                      link: "/wilcom-docs/Modifying/functions/Edit_stitches",
                    },
                  ],
                },
                {
                  text: "Splitting objects",
                  link: "/wilcom-docs/Modifying/functions/Splitting_objects",
                },
                {
                  text: "Editing machine functions",
                  link: "/wilcom-docs/Modifying/functions/Editing_machine_functions",
                  items: [
                    {
                      text: "Machine function types",
                      link: "/wilcom-docs/Modifying/functions/Machine_function_types",
                    },
                    {
                      text: "Insert machine functions manually",
                      link: "/wilcom-docs/Modifying/functions/Insert_machine_functions_manually",
                    },
                    {
                      text: "Edit machine functions manually",
                      link: "/wilcom-docs/Modifying/functions/Edit_machine_functions_manually",
                    },
                  ],
                },
                {
                  text: "Filtering stitches & functions",
                  link: "/wilcom-docs/Modifying/functions/Filtering_stitches_functions",
                  items: [
                    {
                      text: "Filter stitches by function",
                      link: "/wilcom-docs/Modifying/functions/Filter_stitches_by_function",
                    },
                    {
                      text: "Filter stitches by stitch length",
                      link: "/wilcom-docs/Modifying/functions/Filter_stitches_by_stitch_length",
                    },
                  ],
                },
                {
                  text: "Digitizing manual stitches",
                  link: "/wilcom-docs/Modifying/functions/Digitizing_manual_stitches",
                },
                {
                  text: "Converting stitches to objects",
                  link: "/wilcom-docs/Modifying/functions/Converting_stitches_to_objects",
                  items: [
                    {
                      text: "Recognize object outlines",
                      link: "/wilcom-docs/Modifying/functions/Recognize_object_outlines",
                    },
                    {
                      text: "Process manual stitches",
                      link: "/wilcom-docs/Modifying/functions/Process_manual_stitches",
                    },
                  ],
                },
              ],
            },
          ],
          collapsed: true,
        },
        {
          text: "Stitch Quality",
          link: "/wilcom-docs/Quality/PART_Quality/PART_Quality",
          items: [
            {
              text: "Underlay & Pull Compensation",
              link: "/wilcom-docs/Quality/underlays/Underlay_Pull_Compensation",
              items: [
                {
                  text: "Stabilizing with automatic underlay",
                  link: "/wilcom-docs/Quality/underlays/Stabilizing_with_automatic_underlay",
                  items: [
                    {
                      text: "Underlay types",
                      link: "/wilcom-docs/Quality/underlays/Underlay_types",
                    },
                    {
                      text: "Apply automatic underlay",
                      link: "/wilcom-docs/Quality/underlays/Apply_automatic_underlay",
                    },
                    {
                      text: "Underlay by segment or by shape",
                      link: "/wilcom-docs/Quality/underlays/Underlay_by_segment_or_by_shape",
                    },
                    {
                      text: "Underlay margins",
                      link: "/wilcom-docs/Quality/underlays/Underlay_margins",
                    },
                    {
                      text: "Run stitch underlay settings",
                      link: "/wilcom-docs/Quality/underlays/Run_stitch_underlay_settings",
                    },
                    {
                      text: "Tatami underlay settings",
                      link: "/wilcom-docs/Quality/underlays/Tatami_underlay_settings",
                    },
                    {
                      text: "Zigzag underlay settings",
                      link: "/wilcom-docs/Quality/underlays/Zigzag_underlay_settings",
                    },
                  ],
                },
                {
                  text: "Compensating for fabric stretch",
                  link: "/wilcom-docs/Quality/underlays/Compensating_for_fabric_stretch",
                  items: [
                    {
                      text: "Apply automatic pull compensation",
                      link: "/wilcom-docs/Quality/underlays/Apply_automatic_pull_compensation",
                    },
                    {
                      text: "Adjust column width",
                      link: "/wilcom-docs/Quality/underlays/Adjust_column_width",
                    },
                  ],
                },
              ],
            },
            {
              text: "Optimizing Stitch Quality",
              link: "/wilcom-docs/Quality/quality/Optimizing_Stitch_Quality",
              items: [
                {
                  text: "Controlling stitch direction",
                  link: "/wilcom-docs/Quality/quality/Controlling_stitch_direction",
                  items: [
                    {
                      text: "Reverse stitch direction",
                      link: "/wilcom-docs/Quality/quality/Reverse_stitch_direction",
                    },
                    {
                      text: "Reinforce outlines",
                      link: "/wilcom-docs/Quality/quality/Reinforce_outlines",
                    },
                  ],
                },
                {
                  text: "Removing underlying stitching",
                  link: "/wilcom-docs/Quality/quality/Removing_underlying_stitching",
                },
                {
                  text: "Adjusting stitch angles",
                  link: "/wilcom-docs/Quality/quality/Adjusting_stitch_angles",
                  items: [
                    {
                      text: "Add angles in stitch angles mode",
                      link: "/wilcom-docs/Quality/quality/Add_angles_in_stitch_angles_mode",
                    },
                    {
                      text: "Add stitch angles in Reshape mode",
                      link: "/wilcom-docs/Quality/quality/Add_stitch_angles_in_Reshape_mode",
                    },
                  ],
                },
                {
                  text: "Adjusting stitch densities",
                  link: "/wilcom-docs/Quality/quality/Adjusting_stitch_densities",
                },
                {
                  text: "Eliminating small stitches",
                  link: "/wilcom-docs/Quality/quality/Eliminating_small_stitches",
                },
                {
                  text: "Controlling corner stitching",
                  link: "/wilcom-docs/Quality/quality/Controlling_corner_stitching",
                  items: [
                    {
                      text: "Corner handling methods",
                      link: "/wilcom-docs/Quality/quality/Corner_handling_methods",
                    },
                    {
                      text: "Apply Smart Corners",
                      link: "/wilcom-docs/Quality/quality/Apply_Smart_Corners",
                    },
                    {
                      text: "Adjust smart corner settings",
                      link: "/wilcom-docs/Quality/quality/Adjust_smart_corner_settings",
                    },
                    {
                      text: "Round sharp corners",
                      link: "/wilcom-docs/Quality/quality/Round_sharp_corners",
                    },
                  ],
                },
                {
                  text: "Reducing stitch bunching",
                  link: "/wilcom-docs/Quality/quality/Reducing_stitch_bunching",
                  items: [
                    {
                      text: "Apply fractional spacing",
                      link: "/wilcom-docs/Quality/quality/Apply_fractional_spacing",
                    },
                    {
                      text: "Apply stitch shortening",
                      link: "/wilcom-docs/Quality/quality/Apply_stitch_shortening",
                    },
                  ],
                },
                {
                  text: "Optimizing long satin stitches",
                  link: "/wilcom-docs/Quality/quality/Optimizing_long_satin_stitches",
                  items: [
                    {
                      text: "Split satin stitches",
                      link: "/wilcom-docs/Quality/quality/Split_satin_stitches",
                    },
                    {
                      text: "Preserve long stitches",
                      link: "/wilcom-docs/Quality/quality/Preserve_long_stitches",
                    },
                  ],
                },
              ],
            },
            {
              text: "Embroidery Connectors",
              link: "/wilcom-docs/Quality/connectors/Embroidery_Connectors",
              items: [
                {
                  text: "Types of connectors",
                  link: "/wilcom-docs/Quality/connectors/Types_of_connectors",
                },
                {
                  text: "Using automatic connectors",
                  link: "/wilcom-docs/Quality/connectors/Using_automatic_connectors",
                  items: [
                    {
                      text: "Use jumps as connectors",
                      link: "/wilcom-docs/Quality/connectors/Use_jumps_as_connectors",
                    },
                    {
                      text: "Use runs as connectors",
                      link: "/wilcom-docs/Quality/connectors/Use_runs_as_connectors",
                    },
                    {
                      text: "Automatic tie-in settings",
                      link: "/wilcom-docs/Quality/connectors/Automatic_tie-in_settings",
                    },
                    {
                      text: "Automatic tie-off settings",
                      link: "/wilcom-docs/Quality/connectors/Automatic_tie-off_settings",
                    },
                    {
                      text: "Automatic trim settings",
                      link: "/wilcom-docs/Quality/connectors/Automatic_trim_settings",
                    },
                  ],
                },
                {
                  text: "Adding connectors manually",
                  link: "/wilcom-docs/Quality/connectors/Adding_connectors_manually",
                  items: [
                    {
                      text: "Add tie-offs",
                      link: "/wilcom-docs/Quality/connectors/Add_tie-offs",
                    },
                    {
                      text: "Add trims",
                      link: "/wilcom-docs/Quality/connectors/Add_trims",
                    },
                    {
                      text: "Add empty stitches & jumps",
                      link: "/wilcom-docs/Quality/connectors/Add_empty_stitches_jumps",
                    },
                    {
                      text: "Add jumps with penetrations off",
                      link: "/wilcom-docs/Quality/connectors/Add_jumps_with_penetrations_off",
                    },
                  ],
                },
                {
                  text: "Adjusting travel run stitch length",
                  link: "/wilcom-docs/Quality/connectors/Adjusting_travel_run_stitch_length",
                },
                {
                  text: "Keeping or omitting last stitches",
                  link: "/wilcom-docs/Quality/connectors/Keeping_or_omitting_last_stitches",
                },
                {
                  text: "Minimizing connectors",
                  link: "/wilcom-docs/Quality/connectors/Minimizing_connectors",
                  items: [
                    {
                      text: "Adjust entry/exit points",
                      link: "/wilcom-docs/Quality/connectors/Adjust_entry_exit_points",
                    },
                    {
                      text: "Apply closest join",
                      link: "/wilcom-docs/Quality/connectors/Apply_closest_join",
                    },
                    {
                      text: "Closest join limitations",
                      link: "/wilcom-docs/Quality/connectors/Closest_join_limitations",
                    },
                  ],
                },
                {
                  text: "Automatic branching",
                  link: "/wilcom-docs/Quality/connectors/Automatic_branching",
                  items: [
                    {
                      text: "Apply automatic branching",
                      link: "/wilcom-docs/Quality/connectors/Apply_automatic_branching",
                    },
                    {
                      text: "Branch objects with the Color-Object List",
                      link: "/wilcom-docs/Quality/connectors/Branch_objects_with_the_Color-Object_List",
                    },
                    {
                      text: "Apply automatic underlay to branched objects",
                      link: "/wilcom-docs/Quality/connectors/Apply_automatic_underlay_to_branched_objects",
                    },
                  ],
                },
              ],
            },
          ],
          collapsed: true,
        },
        {
          text: "Decorative Embroidery",
          link: "/wilcom-docs/Decorative/PART_Decorative/PART_Decorative",
          items: [
            {
              text: "Patterned Stitching",
              link: "/wilcom-docs/Decorative/patterns/Patterned_Stitching",
              items: [
                {
                  text: "Creating textures with tatami offsets",
                  link: "/wilcom-docs/Decorative/patterns/Creating_textures_with_tatami_offsets",
                  items: [
                    {
                      text: "Create offset patterns",
                      link: "/wilcom-docs/Decorative/patterns/Create_offset_patterns",
                    },
                    {
                      text: "Create partition line patterns",
                      link: "/wilcom-docs/Decorative/patterns/Create_partition_line_patterns",
                    },
                    {
                      text: "Create random patterns",
                      link: "/wilcom-docs/Decorative/patterns/Create_random_patterns",
                    },
                  ],
                },
                {
                  text: "Creating textures with program splits",
                  link: "/wilcom-docs/Decorative/patterns/Creating_textures_with_program_splits",
                  items: [
                    {
                      text: "Apply program splits",
                      link: "/wilcom-docs/Decorative/patterns/Apply_program_splits",
                    },
                    {
                      text: "Apply combination splits",
                      link: "/wilcom-docs/Decorative/patterns/Apply_combination_splits",
                    },
                    {
                      text: "Program split settings",
                      link: "/wilcom-docs/Decorative/patterns/Program_split_settings",
                    },
                    {
                      text: "Lay out program splits on-screen",
                      link: "/wilcom-docs/Decorative/patterns/Lay_out_program_splits_on-screen",
                    },
                  ],
                },
                {
                  text: "Creating patterns with custom splits",
                  link: "/wilcom-docs/Decorative/patterns/Creating_patterns_with_custom_splits",
                  items: [
                    {
                      text: "Make split patterns",
                      link: "/wilcom-docs/Decorative/patterns/Make_split_patterns",
                    },
                    {
                      text: "Edit split patterns",
                      link: "/wilcom-docs/Decorative/patterns/Edit_split_patterns",
                    },
                    {
                      text: "User-defined splits",
                      link: "/wilcom-docs/Decorative/patterns/User-defined_splits",
                    },
                  ],
                },
                {
                  text: "Creating patterns with carving stamps",
                  link: "/wilcom-docs/Decorative/patterns/Creating_patterns_with_carving_stamps",
                  items: [
                    {
                      text: "Apply predefined patterns",
                      link: "/wilcom-docs/Decorative/patterns/Apply_predefined_patterns",
                    },
                    {
                      text: "Use objects as carving stamps",
                      link: "/wilcom-docs/Decorative/patterns/Use_objects_as_carving_stamps",
                    },
                    {
                      text: "Digitize custom splits",
                      link: "/wilcom-docs/Decorative/patterns/Digitize_custom_splits",
                    },
                    {
                      text: "Add stamps to a library",
                      link: "/wilcom-docs/Decorative/patterns/Add_stamps_to_a_library",
                    },
                    {
                      text: "Carving stamp appearance",
                      link: "/wilcom-docs/Decorative/patterns/Carving_stamp_appearance",
                    },
                    {
                      text: "Reshape carving stamps",
                      link: "/wilcom-docs/Decorative/patterns/Reshape_carving_stamps",
                    },
                  ],
                },
              ],
            },
            {
              text: "Curved Stitching",
              link: "/wilcom-docs/Decorative/curves/Curved_Stitching",
              items: [
                {
                  text: "Contoured fills",
                  link: "/wilcom-docs/Decorative/curves/Contoured_fills",
                  items: [
                    {
                      text: "Digitize contour fills",
                      link: "/wilcom-docs/Decorative/curves/Digitize_contour_fills",
                    },
                    {
                      text: "Contour stitch settings",
                      link: "/wilcom-docs/Decorative/curves/Contour_stitch_settings",
                    },
                  ],
                },
                {
                  text: "Offset fills",
                  link: "/wilcom-docs/Decorative/curves/Offset_fills",
                },
                {
                  text: "Spiral fills",
                  link: "/wilcom-docs/Decorative/curves/Spiral_fills",
                },
                {
                  text: "Radial fills",
                  link: "/wilcom-docs/Decorative/curves/Radial_fills",
                },
                {
                  text: "Flexi-splits",
                  link: "/wilcom-docs/Decorative/curves/Flexi-splits",
                },
                {
                  text: "Curved fills",
                  link: "/wilcom-docs/Decorative/curves/Curved_fills",
                  items: [
                    {
                      text: "Create curved fills with Florentine Effect",
                      link: "/wilcom-docs/Decorative/curves/Create_curved_fills_with_Florentine_Effect",
                    },
                    {
                      text: "Create curved fills with Liquid Effect",
                      link: "/wilcom-docs/Decorative/curves/Create_curved_fills_with_Liquid_Effect",
                    },
                    {
                      text: "Adjust curved fill settings",
                      link: "/wilcom-docs/Decorative/curves/Adjust_curved_fill_settings",
                    },
                    {
                      text: "Apply curved fills to existing objects",
                      link: "/wilcom-docs/Decorative/curves/Apply_curved_fills_to_existing_objects",
                    },
                    {
                      text: "Apply curved lines to multiple objects",
                      link: "/wilcom-docs/Decorative/curves/Apply_curved_lines_to_multiple_objects",
                    },
                  ],
                },
              ],
            },
            {
              text: "Motif Stitching",
              link: "/wilcom-docs/Decorative/motifs/Motif_Stitching",
              items: [
                {
                  text: "Selecting & placing motifs",
                  link: "/wilcom-docs/Decorative/motifs/Selecting_placing_motifs",
                },
                {
                  text: "Motif runs",
                  link: "/wilcom-docs/Decorative/motifs/Motif_runs",
                  items: [
                    {
                      text: "Digitize motif runs",
                      link: "/wilcom-docs/Decorative/motifs/Digitize_motif_runs",
                    },
                    {
                      text: "Create graded motif runs",
                      link: "/wilcom-docs/Decorative/motifs/Create_graded_motif_runs",
                    },
                    {
                      text: "Reshape motif runs",
                      link: "/wilcom-docs/Decorative/motifs/Reshape_motif_runs",
                    },
                  ],
                },
                {
                  text: "Motif fills",
                  link: "/wilcom-docs/Decorative/motifs/Motif_fills",
                  items: [
                    {
                      text: "Digitize motif fills",
                      link: "/wilcom-docs/Decorative/motifs/Digitize_motif_fills",
                    },
                    {
                      text: "Motif fill settings",
                      link: "/wilcom-docs/Decorative/motifs/Motif_fill_settings",
                    },
                    {
                      text: "Lay out motif fills on-screen",
                      link: "/wilcom-docs/Decorative/motifs/Lay_out_motif_fills_on-screen",
                    },
                  ],
                },
                {
                  text: "Enveloped motif fills",
                  link: "/wilcom-docs/Decorative/motifs/Enveloped_motif_fills",
                  items: [
                    {
                      text: "Create graded motif columns",
                      link: "/wilcom-docs/Decorative/motifs/Create_graded_motif_columns",
                    },
                    {
                      text: "Create convex & concave effects",
                      link: "/wilcom-docs/Decorative/motifs/Create_convex_concave_effects",
                    },
                    {
                      text: "Create perspective effects",
                      link: "/wilcom-docs/Decorative/motifs/Create_perspective_effects",
                    },
                  ],
                },
                {
                  text: "Custom motifs",
                  link: "/wilcom-docs/Decorative/motifs/Custom_motifs",
                  items: [
                    {
                      text: "Create & save motifs",
                      link: "/wilcom-docs/Decorative/motifs/Create_save_motifs",
                    },
                    {
                      text: "Manage custom motifs",
                      link: "/wilcom-docs/Decorative/motifs/Manage_custom_motifs",
                    },
                  ],
                },
              ],
            },
            {
              text: "Specialty Stitching",
              link: "/wilcom-docs/Decorative/specialty/Specialty_Stitching",
              items: [
                {
                  text: "Freehand embroidery",
                  link: "/wilcom-docs/Decorative/specialty/Freehand_embroidery",
                  items: [
                    {
                      text: "Freehand stitching techniques",
                      link: "/wilcom-docs/Decorative/specialty/Freehand_stitching_techniques",
                    },
                    {
                      text: "Create freehand lines",
                      link: "/wilcom-docs/Decorative/specialty/Create_freehand_lines",
                    },
                    {
                      text: "Adjust freehand line smoothness",
                      link: "/wilcom-docs/Decorative/specialty/Adjust_freehand_line_smoothness",
                    },
                  ],
                },
                {
                  text: "Organic stitching",
                  link: "/wilcom-docs/Decorative/specialty/Organic_stitching",
                  items: [
                    {
                      text: "Hand stitch effect",
                      link: "/wilcom-docs/Decorative/specialty/Hand_stitch_effect",
                    },
                    {
                      text: "Jagged edges",
                      link: "/wilcom-docs/Decorative/specialty/Jagged_edges",
                    },
                    {
                      text: "String stitching",
                      link: "/wilcom-docs/Decorative/specialty/String_stitching",
                    },
                  ],
                },
                {
                  text: "Open stitching",
                  link: "/wilcom-docs/Decorative/specialty/Open_stitching",
                  items: [
                    {
                      text: "Decorative borders",
                      link: "/wilcom-docs/Decorative/specialty/Decorative_borders",
                    },
                    {
                      text: "Stippling effects",
                      link: "/wilcom-docs/Decorative/specialty/Stippling_effects",
                    },
                    {
                      text: "Maze fills",
                      link: "/wilcom-docs/Decorative/specialty/Maze_fills",
                    },
                    {
                      text: "Trapunto open stitching",
                      link: "/wilcom-docs/Decorative/specialty/Trapunto_open_stitching",
                    },
                  ],
                },
                {
                  text: "Gradient stitching",
                  link: "/wilcom-docs/Decorative/specialty/Gradient_stitching",
                  items: [
                    {
                      text: "Accordion spacing",
                      link: "/wilcom-docs/Decorative/specialty/Accordion_spacing",
                    },
                    {
                      text: "Color blends",
                      link: "/wilcom-docs/Decorative/specialty/Color_blends",
                    },
                  ],
                },
                {
                  text: "Chenille patterns",
                  link: "/wilcom-docs/Decorative/specialty/Chenille_patterns",
                  items: [
                    {
                      text: "Coil stitching",
                      link: "/wilcom-docs/Decorative/specialty/Coil_stitching",
                    },
                    {
                      text: "Square stitching",
                      link: "/wilcom-docs/Decorative/specialty/Square_stitching",
                    },
                  ],
                },
                {
                  text: "Cross stitch fills",
                  link: "/wilcom-docs/Decorative/specialty/Cross_stitch_fills",
                },
              ],
            },
          ],
          collapsed: true,
        },
        {
          text: "Embroidery Lettering",
          link: "/wilcom-docs/Lettering/PART_Lettering/PART_Lettering",
          items: [
            {
              text: "Creating Embroidery Lettering",
              link: "/wilcom-docs/Lettering/lettering_create/Creating_Embroidery_Lettering",
              items: [
                {
                  text: "Creating lettering with CorelDRAW Graphics",
                  link: "/wilcom-docs/Lettering/lettering_create/Creating_lettering_with_CorelDRAW_Graphics",
                },
                {
                  text: "Creating embroidery lettering",
                  link: "/wilcom-docs/Lettering/lettering_create/Creating_embroidery_lettering1",
                  items: [
                    {
                      text: "Select embroidery fonts",
                      link: "/wilcom-docs/Lettering/lettering_create/Select_embroidery_fonts",
                    },
                    {
                      text: "Add embroidery lettering on-screen",
                      link: "/wilcom-docs/Lettering/lettering_create/Add_embroidery_lettering_on-screen",
                    },
                    {
                      text: "Create lettering with object properties",
                      link: "/wilcom-docs/Lettering/lettering_create/Create_lettering_with_object_properties",
                    },
                  ],
                },
                {
                  text: "Adjusting lettering properties",
                  link: "/wilcom-docs/Lettering/lettering_create/Adjusting_lettering_properties",
                  items: [
                    {
                      text: "Format lettering",
                      link: "/wilcom-docs/Lettering/lettering_create/Format_lettering",
                    },
                    {
                      text: "Adjust spacing settings",
                      link: "/wilcom-docs/Lettering/lettering_create/Adjust_spacing_settings",
                    },
                    {
                      text: "Adjust letter spacings on-screen",
                      link: "/wilcom-docs/Lettering/lettering_create/Adjust_letter_spacings_on-screen",
                    },
                  ],
                },
                {
                  text: "Working with baselines",
                  link: "/wilcom-docs/Lettering/lettering_create/Working_with_baselines",
                  items: [
                    {
                      text: "Apply baselines",
                      link: "/wilcom-docs/Lettering/lettering_create/Apply_baselines",
                    },
                    {
                      text: "Use predefined baselines",
                      link: "/wilcom-docs/Lettering/lettering_create/Use_predefined_baselines",
                    },
                  ],
                },
              ],
            },
            {
              text: "Editing Embroidery Lettering",
              link: "/wilcom-docs/Lettering/lettering_edit/Editing_Embroidery_Lettering",
              items: [
                {
                  text: "Editing text",
                  link: "/wilcom-docs/Lettering/lettering_edit/Editing_text",
                },
                {
                  text: "Modifying lettering",
                  link: "/wilcom-docs/Lettering/lettering_edit/Modifying_lettering",
                  items: [
                    {
                      text: "Adjust dimensions",
                      link: "/wilcom-docs/Lettering/lettering_edit/Adjust_dimensions",
                    },
                    {
                      text: "Scale lettering",
                      link: "/wilcom-docs/Lettering/lettering_edit/Scale_lettering",
                    },
                    {
                      text: "Transform lettering",
                      link: "/wilcom-docs/Lettering/lettering_edit/Transform_lettering",
                    },
                  ],
                },
                {
                  text: "Adjusting individual letters",
                  link: "/wilcom-docs/Lettering/lettering_edit/Adjusting_individual_letters",
                  items: [
                    {
                      text: "Reposition letters",
                      link: "/wilcom-docs/Lettering/lettering_edit/Reposition_letters",
                    },
                    {
                      text: "Transform letters",
                      link: "/wilcom-docs/Lettering/lettering_edit/Transform_letters",
                    },
                    {
                      text: "Reshape letters",
                      link: "/wilcom-docs/Lettering/lettering_edit/Reshape_letters",
                    },
                    {
                      text: "Recolor letters",
                      link: "/wilcom-docs/Lettering/lettering_edit/Recolor_letters",
                    },
                  ],
                },
                {
                  text: "Adjusting baselines",
                  link: "/wilcom-docs/Lettering/lettering_edit/Adjusting_baselines",
                  items: [
                    {
                      text: "Reshape baselines interactively",
                      link: "/wilcom-docs/Lettering/lettering_edit/Reshape_baselines_interactively",
                    },
                    {
                      text: "Adjust fixed-width baseline settings",
                      link: "/wilcom-docs/Lettering/lettering_edit/Adjust_fixed-width_baseline_settings",
                    },
                    {
                      text: "Adjust curved baseline settings",
                      link: "/wilcom-docs/Lettering/lettering_edit/Adjust_curved_baseline_settings",
                    },
                    {
                      text: "Change letter orientation",
                      link: "/wilcom-docs/Lettering/lettering_edit/Change_letter_orientation",
                    },
                  ],
                },
                {
                  text: "Breaking apart lettering",
                  link: "/wilcom-docs/Lettering/lettering_edit/Breaking_apart_lettering",
                },
              ],
            },
            {
              text: "Advanced Embroidery Lettering",
              link: "/wilcom-docs/Lettering/lettering_advanced/Advanced_Embroidery_Lettering",
              items: [
                {
                  text: "Adding special characters",
                  link: "/wilcom-docs/Lettering/lettering_advanced/Adding_special_characters",
                  items: [
                    {
                      text: "Insert symbols",
                      link: "/wilcom-docs/Lettering/lettering_advanced/Insert_symbols",
                    },
                    {
                      text: "Create flair script designs",
                      link: "/wilcom-docs/Lettering/lettering_advanced/Create_flair_script_designs",
                    },
                    {
                      text: "Add monogram lettering",
                      link: "/wilcom-docs/Lettering/lettering_advanced/Add_monogram_lettering",
                    },
                    {
                      text: "Use the Character Map",
                      link: "/wilcom-docs/Lettering/lettering_advanced/Use_the_Character_Map",
                    },
                  ],
                },
                {
                  text: "Applying stitch types & effects to lettering",
                  link: "/wilcom-docs/Lettering/lettering_advanced/Applying_stitch_types_effects_to_lettering",
                },
                {
                  text: "Creating special effects with lettering art",
                  link: "/wilcom-docs/Lettering/lettering_advanced/Creating_special_effects_with_lettering_art",
                },
                {
                  text: "Setting stitching sequence & join method",
                  link: "/wilcom-docs/Lettering/lettering_advanced/Setting_stitching_sequence_join_method",
                  items: [
                    {
                      text: "Adjust letter sequencing",
                      link: "/wilcom-docs/Lettering/lettering_advanced/Adjust_letter_sequencing",
                    },
                    {
                      text: "Change lettering join method",
                      link: "/wilcom-docs/Lettering/lettering_advanced/Change_lettering_join_method",
                    },
                  ],
                },
                {
                  text: "Setting automatic letter kerning",
                  link: "/wilcom-docs/Lettering/lettering_advanced/Setting_automatic_letter_kerning",
                  items: [
                    {
                      text: "Apply automatic kerning",
                      link: "/wilcom-docs/Lettering/lettering_advanced/Apply_automatic_kerning",
                    },
                    {
                      text: "Manage kerning tables",
                      link: "/wilcom-docs/Lettering/lettering_advanced/Manage_kerning_tables",
                    },
                    {
                      text: "Edit kerning values",
                      link: "/wilcom-docs/Lettering/lettering_advanced/Edit_kerning_values",
                    },
                  ],
                },
                {
                  text: "Setting automatic letter spacing",
                  link: "/wilcom-docs/Lettering/lettering_advanced/Setting_automatic_letter_spacing",
                },
                {
                  text: "Setting lettering underlay",
                  link: "/wilcom-docs/Lettering/lettering_advanced/Setting_lettering_underlay",
                },
              ],
            },
            {
              text: "Team Names",
              link: "/wilcom-docs/Lettering/lettering_names/Team_Names",
              items: [
                {
                  text: "Creating simple teamname designs",
                  link: "/wilcom-docs/Lettering/lettering_names/Creating_simple_teamname_designs",
                  items: [
                    {
                      text: "Create teamname objects",
                      link: "/wilcom-docs/Lettering/lettering_names/Create_teamname_objects",
                    },
                    {
                      text: "Import teamname lists with additional fields",
                      link: "/wilcom-docs/Lettering/lettering_names/Import_teamname_lists_with_additional_fields",
                    },
                  ],
                },
                {
                  text: "Teamname templates",
                  link: "/wilcom-docs/Lettering/lettering_names/Teamname_templates",
                  items: [
                    {
                      text: "Use templates with teamname designs",
                      link: "/wilcom-docs/Lettering/lettering_names/Use_templates_with_teamname_designs",
                    },
                    {
                      text: "Create custom templates",
                      link: "/wilcom-docs/Lettering/lettering_names/Create_custom_templates",
                    },
                  ],
                },
                {
                  text: "Modifying teamname designs",
                  link: "/wilcom-docs/Lettering/lettering_names/Modifying_teamname_designs",
                },
                {
                  text: "Managing teams",
                  link: "/wilcom-docs/Lettering/lettering_names/Managing_teams",
                },
                {
                  text: "Outputting teamname designs",
                  link: "/wilcom-docs/Lettering/lettering_names/Outputting_teamname_designs",
                  items: [
                    {
                      text: "Create separate designs",
                      link: "/wilcom-docs/Lettering/lettering_names/Create_separate_designs",
                    },
                    {
                      text: "Create a matrix of designs",
                      link: "/wilcom-docs/Lettering/lettering_names/Create_a_matrix_of_designs",
                    },
                    {
                      text: "Output teamname designs",
                      link: "/wilcom-docs/Lettering/lettering_names/Output_teamname_designs",
                    },
                  ],
                },
              ],
            },
            {
              text: "Monogramming",
              link: "/wilcom-docs/Lettering/lettering_monograms/Monogramming",
              items: [
                {
                  text: "Monogram designs",
                  link: "/wilcom-docs/Lettering/lettering_monograms/Monogram_designs",
                },
                {
                  text: "Monogram lettering",
                  link: "/wilcom-docs/Lettering/lettering_monograms/Monogram_lettering",
                },
                {
                  text: "Monogram ornaments",
                  link: "/wilcom-docs/Lettering/lettering_monograms/Monogram_ornaments",
                  items: [
                    {
                      text: "Modify ornaments",
                      link: "/wilcom-docs/Lettering/lettering_monograms/Modify_ornaments",
                    },
                    {
                      text: "Add ornaments",
                      link: "/wilcom-docs/Lettering/lettering_monograms/Add_ornaments",
                    },
                    {
                      text: "Create single ornament layouts",
                      link: "/wilcom-docs/Lettering/lettering_monograms/Create_single_ornament_layouts",
                    },
                    {
                      text: "Multi-ornament layouts",
                      link: "/wilcom-docs/Lettering/lettering_monograms/Multi-ornament_layouts",
                    },
                  ],
                },
                {
                  text: "Monogram borders",
                  link: "/wilcom-docs/Lettering/lettering_monograms/Monogram_borders",
                  items: [
                    {
                      text: "Change borders",
                      link: "/wilcom-docs/Lettering/lettering_monograms/Change_borders",
                    },
                    {
                      text: "Adjust border shape & offset",
                      link: "/wilcom-docs/Lettering/lettering_monograms/Adjust_border_shape_offset",
                    },
                    {
                      text: "Add multiple borders",
                      link: "/wilcom-docs/Lettering/lettering_monograms/Add_multiple_borders",
                    },
                  ],
                },
              ],
            },
            {
              text: "Custom Lettering",
              link: "/wilcom-docs/Lettering/lettering_custom/Custom_Lettering",
              items: [
                {
                  text: "Converting TrueType fonts to embroidery",
                  link: "/wilcom-docs/Lettering/lettering_custom/Converting_TrueType_fonts_to_embroidery",
                  items: [
                    {
                      text: "Convert letters on-the-fly",
                      link: "/wilcom-docs/Lettering/lettering_custom/Convert_letters_on-the-fly",
                    },
                    {
                      text: "Convert TrueType fonts",
                      link: "/wilcom-docs/Lettering/lettering_custom/Convert_TrueType_fonts",
                    },
                  ],
                },
                {
                  text: "Creating user-refined letters",
                  link: "/wilcom-docs/Lettering/lettering_custom/Creating_user-refined_letters",
                  items: [
                    {
                      text: "Save user-refined letters",
                      link: "/wilcom-docs/Lettering/lettering_custom/Save_user-refined_letters",
                    },
                    {
                      text: "Manage user-refined letters",
                      link: "/wilcom-docs/Lettering/lettering_custom/Manage_user-refined_letters",
                    },
                  ],
                },
                {
                  text: "Creating custom fonts",
                  link: "/wilcom-docs/Lettering/lettering_custom/Creating_custom_fonts",
                  items: [
                    {
                      text: "Custom font considerations",
                      link: "/wilcom-docs/Lettering/lettering_custom/Custom_font_considerations",
                    },
                    {
                      text: "Create custom letters",
                      link: "/wilcom-docs/Lettering/lettering_custom/Create_custom_letters",
                    },
                    {
                      text: "Save custom letters",
                      link: "/wilcom-docs/Lettering/lettering_custom/Save_custom_letters",
                    },
                    {
                      text: "Save custom fonts",
                      link: "/wilcom-docs/Lettering/lettering_custom/Save_custom_fonts",
                    },
                    {
                      text: "Select custom fonts",
                      link: "/wilcom-docs/Lettering/lettering_custom/Select_custom_fonts",
                    },
                    {
                      text: "Manage fonts",
                      link: "/wilcom-docs/Lettering/lettering_custom/Manage_fonts",
                    },
                  ],
                },
                {
                  text: "Merging fonts",
                  link: "/wilcom-docs/Lettering/lettering_custom/Merging_fonts",
                },
              ],
            },
            {
              text: "Lettering Kiosk",
              link: "/wilcom-docs/Lettering/lettering_kiosk/Lettering_Kiosk",
              items: [
                {
                  text: "Operations summary",
                  link: "/wilcom-docs/Lettering/lettering_kiosk/Operations_summary",
                },
                {
                  text: "Operating modes",
                  link: "/wilcom-docs/Lettering/lettering_kiosk/Operating_modes",
                  items: [
                    {
                      text: "Screen modes",
                      link: "/wilcom-docs/Lettering/lettering_kiosk/Screen_modes",
                    },
                    {
                      text: "Normal Kiosk operation",
                      link: "/wilcom-docs/Lettering/lettering_kiosk/Normal_Kiosk_operation",
                    },
                    {
                      text: "Troubleshooting long descenders",
                      link: "/wilcom-docs/Lettering/lettering_kiosk/Troubleshooting_long_descenders",
                    },
                    {
                      text: "Creating two-line lettering",
                      link: "/wilcom-docs/Lettering/lettering_kiosk/Creating_two-line_lettering",
                    },
                    {
                      text: "Personalizing monograms",
                      link: "/wilcom-docs/Lettering/lettering_kiosk/Personalizing_monograms",
                    },
                  ],
                },
                {
                  text: "Configuration options for supervisors",
                  link: "/wilcom-docs/Lettering/lettering_kiosk/Configuration_options_for_supervisors",
                  items: [
                    {
                      text: "Create kiosk passwords",
                      link: "/wilcom-docs/Lettering/lettering_kiosk/Create_kiosk_passwords",
                    },
                    {
                      text: "Set up machine connections",
                      link: "/wilcom-docs/Lettering/lettering_kiosk/Set_up_machine_connections",
                    },
                    {
                      text: "Set up thread colors",
                      link: "/wilcom-docs/Lettering/lettering_kiosk/Set_up_thread_colors",
                    },
                    {
                      text: "Configure kiosk character count limits",
                      link: "/wilcom-docs/Lettering/lettering_kiosk/Configure_kiosk_character_count_limits",
                    },
                    {
                      text: "Change design location",
                      link: "/wilcom-docs/Lettering/lettering_kiosk/Change_design_location",
                    },
                    {
                      text: "Customize kiosk banners",
                      link: "/wilcom-docs/Lettering/lettering_kiosk/Customize_kiosk_banners",
                    },
                  ],
                },
                {
                  text: "Creating custom design layouts",
                  link: "/wilcom-docs/Lettering/lettering_kiosk/Creating_custom_design_layouts",
                  items: [
                    {
                      text: "Create new layouts from old",
                      link: "/wilcom-docs/Lettering/lettering_kiosk/Create_new_layouts_from_old",
                    },
                    {
                      text: "Create layouts based on templates",
                      link: "/wilcom-docs/Lettering/lettering_kiosk/Create_layouts_based_on_templates",
                    },
                    {
                      text: "Create layouts with included design motifs",
                      link: "/wilcom-docs/Lettering/lettering_kiosk/Create_layouts_with_included_design_motifs",
                    },
                    {
                      text: "Include design backdrops",
                      link: "/wilcom-docs/Lettering/lettering_kiosk/Include_design_backdrops",
                    },
                  ],
                },
              ],
            },
          ],
          collapsed: true,
        },
        {
          text: "Digitizing with Artwork",
          link: "/wilcom-docs/Automatic/PART_Automatic/PART_Automatic",
          items: [
            {
              text: "Digitizing with Bitmaps",
              link: "/wilcom-docs/Automatic/bitmaps/Digitizing_with_Bitmaps",
              items: [
                {
                  text: "Choosing suitable artwork",
                  link: "/wilcom-docs/Automatic/bitmaps/Choosing_suitable_artwork",
                },
                {
                  text: "Image preparation techniques",
                  link: "/wilcom-docs/Automatic/bitmaps/Image_preparation_techniques",
                },
                {
                  text: "Preparing artwork for scanning",
                  link: "/wilcom-docs/Automatic/bitmaps/Preparing_artwork_for_scanning",
                },
                {
                  text: "Loading bitmap artwork",
                  link: "/wilcom-docs/Automatic/bitmaps/Loading_bitmap_artwork",
                  items: [
                    {
                      text: "Sample designs & artwork",
                      link: "/wilcom-docs/Automatic/bitmaps/Sample_designs_artwork",
                    },
                    {
                      text: "Scan images",
                      link: "/wilcom-docs/Automatic/bitmaps/Scan_images",
                    },
                    {
                      text: "Insert bitmap images",
                      link: "/wilcom-docs/Automatic/bitmaps/Insert_bitmap_images",
                    },
                    {
                      text: "Open graphic files directly",
                      link: "/wilcom-docs/Automatic/bitmaps/Open_graphic_files_directly",
                    },
                    {
                      text: "Add & match image colors",
                      link: "/wilcom-docs/Automatic/bitmaps/Add_match_image_colors",
                    },
                  ],
                },
                {
                  text: "Preparing artwork for digitizing",
                  link: "/wilcom-docs/Automatic/bitmaps/Preparing_artwork_for_digitizing",
                  items: [
                    {
                      text: "Image transparencies",
                      link: "/wilcom-docs/Automatic/bitmaps/Image_transparencies",
                    },
                    {
                      text: "Crop bitmap images",
                      link: "/wilcom-docs/Automatic/bitmaps/Crop_bitmap_images",
                    },
                    {
                      text: "Touch up bitmaps",
                      link: "/wilcom-docs/Automatic/bitmaps/Touch_up_bitmaps",
                    },
                    {
                      text: "Smooth bitmap images",
                      link: "/wilcom-docs/Automatic/bitmaps/Smooth_bitmap_images",
                    },
                    {
                      text: "Save artwork",
                      link: "/wilcom-docs/Automatic/bitmaps/Save_artwork",
                    },
                  ],
                },
                {
                  text: "Preparing images for auto-digitizing",
                  link: "/wilcom-docs/Automatic/bitmaps/Preparing_images_for_auto-digitizing",
                  items: [
                    {
                      text: "Prepare bitmaps for auto-digitizing",
                      link: "/wilcom-docs/Automatic/bitmaps/Prepare_bitmaps_for_auto-digitizing",
                    },
                    {
                      text: "Prepare photos for auto-digitizing",
                      link: "/wilcom-docs/Automatic/bitmaps/Prepare_photos_for_auto-digitizing",
                    },
                  ],
                },
                {
                  text: "Preparing artwork for continuous embroidery",
                  link: "/wilcom-docs/Automatic/bitmaps/Preparing_artwork_for_continuous_embroidery",
                },
              ],
            },
            {
              text: "Digitizing with Vectors",
              link: "/wilcom-docs/Automatic/vectors/Digitizing_with_Vectors",
              items: [
                {
                  text: "Creating vector shapes in EmbroideryStudio",
                  link: "/wilcom-docs/Automatic/vectors/Creating_vector_shapes_in_EmbroideryStudio",
                  items: [
                    {
                      text: "Create vectors",
                      link: "/wilcom-docs/Automatic/vectors/Create_vectors",
                    },
                    {
                      text: "Color vectors",
                      link: "/wilcom-docs/Automatic/vectors/Color_vectors",
                    },
                  ],
                },
                {
                  text: "Loading vector artwork",
                  link: "/wilcom-docs/Automatic/vectors/Loading_vector_artwork",
                  items: [
                    {
                      text: "Insert vector graphics",
                      link: "/wilcom-docs/Automatic/vectors/Insert_vector_graphics",
                    },
                    {
                      text: "Import vector graphics",
                      link: "/wilcom-docs/Automatic/vectors/Import_vector_graphics",
                    },
                  ],
                },
                {
                  text: "Auto-tracing bitmap artwork",
                  link: "/wilcom-docs/Automatic/vectors/Auto-tracing_bitmap_artwork",
                },
                {
                  text: "Smoothing curves",
                  link: "/wilcom-docs/Automatic/vectors/Smoothing_curves",
                },
                {
                  text: "Visualizing vector graphics",
                  link: "/wilcom-docs/Automatic/vectors/Visualizing_vector_graphics",
                },
              ],
            },
            {
              text: "Automatic Digitizing",
              link: "/wilcom-docs/Automatic/automatic/Automatic_Digitizing",
              items: [
                {
                  text: "Loading & presetting artwork",
                  link: "/wilcom-docs/Automatic/automatic/Loading_presetting_artwork",
                },
                {
                  text: "Converting designs with CorelDRAW Graphics",
                  link: "/wilcom-docs/Automatic/automatic/Converting_designs_with_CorelDRAW_Graphics",
                  items: [
                    {
                      text: "Convert objects with CorelDRAW Graphics",
                      link: "/wilcom-docs/Automatic/automatic/Convert_objects_with_CorelDRAW_Graphics",
                    },
                    {
                      text: "Convert objects with Wilcom Workspace",
                      link: "/wilcom-docs/Automatic/automatic/Convert_objects_with_Wilcom_Workspace",
                    },
                  ],
                },
                {
                  text: "Auto-digitizing artwork",
                  link: "/wilcom-docs/Automatic/automatic/Auto-digitizing_artwork",
                  items: [
                    {
                      text: "Auto-digitize ‘instant embroidery’",
                      link: "/wilcom-docs/Automatic/automatic/Auto-digitize_%E2%80%98instant_embroidery%E2%80%99",
                    },
                    {
                      text: "Auto-digitize entire designs",
                      link: "/wilcom-docs/Automatic/automatic/Auto-digitize_entire_designs",
                    },
                    {
                      text: "Auto-digitize individual shapes",
                      link: "/wilcom-docs/Automatic/automatic/Auto-digitize_individual_shapes",
                    },
                  ],
                },
                {
                  text: "Auto-digitizing photographs",
                  link: "/wilcom-docs/Automatic/automatic/Auto-digitizing_photographs",
                  items: [
                    {
                      text: "Auto-digitize with Photo Flash",
                      link: "/wilcom-docs/Automatic/automatic/Auto-digitize_with_Photo_Flash",
                    },
                    {
                      text: "Auto-digitize with Reef PhotoStitch",
                      link: "/wilcom-docs/Automatic/automatic/Auto-digitize_with_Reef_PhotoStitch",
                    },
                    {
                      text: "Auto-digitize with Color PhotoStitch",
                      link: "/wilcom-docs/Automatic/automatic/Auto-digitize_with_Color_PhotoStitch",
                    },
                  ],
                },
              ],
            },
          ],
          collapsed: true,
        },
        {
          text: "Embroidery Production",
          link: "/wilcom-docs/Production/PART_Production/PART_Production",
          items: [
            {
              text: "Design Hooping",
              link: "/wilcom-docs/Production/hoops/Design_Hooping",
              items: [
                {
                  text: "Hoops & templates",
                  link: "/wilcom-docs/Production/hoops/Hoops_templates",
                },
                {
                  text: "Setting up hoop lists",
                  link: "/wilcom-docs/Production/hoops/Setting_up_hoop_lists",
                },
                {
                  text: "Setting auto start & end",
                  link: "/wilcom-docs/Production/hoops/Setting_auto_start_end",
                },
                {
                  text: "Selecting hoops automatically",
                  link: "/wilcom-docs/Production/hoops/Selecting_hoops_automatically",
                },
                {
                  text: "Selecting hoops manually",
                  link: "/wilcom-docs/Production/hoops/Selecting_hoops_manually",
                },
                {
                  text: "Creating custom hoops",
                  link: "/wilcom-docs/Production/hoops/Creating_custom_hoops",
                  items: [
                    {
                      text: "Custom hoop types",
                      link: "/wilcom-docs/Production/hoops/Custom_hoop_types",
                    },
                    {
                      text: "Define custom hoops",
                      link: "/wilcom-docs/Production/hoops/Define_custom_hoops",
                    },
                  ],
                },
              ],
            },
            {
              text: "Design Reports",
              link: "/wilcom-docs/Production/reports/Design_Reports",
              items: [
                {
                  text: "Outputting designs as images",
                  link: "/wilcom-docs/Production/reports/Outputting_designs_as_images",
                },
                {
                  text: "Printing design reports",
                  link: "/wilcom-docs/Production/reports/Printing_design_reports",
                  items: [
                    {
                      text: "Print reports",
                      link: "/wilcom-docs/Production/reports/Print_reports",
                    },
                    {
                      text: "Report types",
                      link: "/wilcom-docs/Production/reports/Report_types",
                    },
                  ],
                },
                {
                  text: "Customizing design reports",
                  link: "/wilcom-docs/Production/reports/Customizing_design_reports",
                  items: [
                    {
                      text: "General options",
                      link: "/wilcom-docs/Production/reports/General_options",
                    },
                    {
                      text: "Barcode options",
                      link: "/wilcom-docs/Production/reports/Barcode_options",
                    },
                    {
                      text: "Colorway options",
                      link: "/wilcom-docs/Production/reports/Colorway_options",
                    },
                    {
                      text: "Zoom options",
                      link: "/wilcom-docs/Production/reports/Zoom_options",
                    },
                    {
                      text: "Design options",
                      link: "/wilcom-docs/Production/reports/Design_options",
                    },
                    {
                      text: "Information options",
                      link: "/wilcom-docs/Production/reports/Information_options",
                    },
                    {
                      text: "Blocks options",
                      link: "/wilcom-docs/Production/reports/Blocks_options",
                    },
                    {
                      text: "Stop sequence options",
                      link: "/wilcom-docs/Production/reports/Stop_sequence_options",
                    },
                  ],
                },
              ],
            },
            {
              text: "Machine Files",
              link: "/wilcom-docs/Production/convert/Machine_Files",
              items: [
                {
                  text: "Opening machine files",
                  link: "/wilcom-docs/Production/convert/Opening_machine_files",
                  items: [
                    {
                      text: "Object recognition",
                      link: "/wilcom-docs/Production/convert/Object_recognition",
                    },
                    {
                      text: "Open machine files",
                      link: "/wilcom-docs/Production/convert/Open_machine_files",
                    },
                    {
                      text: "Advanced recognition settings",
                      link: "/wilcom-docs/Production/convert/Advanced_recognition_settings",
                    },
                  ],
                },
                {
                  text: "Reassigning colors to machine files",
                  link: "/wilcom-docs/Production/convert/Reassigning_colors_to_machine_files",
                },
                {
                  text: "Reading Melco CND design files",
                  link: "/wilcom-docs/Production/convert/Reading_Melco_CND_design_files",
                  items: [
                    {
                      text: "Convert CND files to EMB",
                      link: "/wilcom-docs/Production/convert/Convert_CND_files_to_EMB",
                    },
                    {
                      text: "Read CND files with color-merge TXT file",
                      link: "/wilcom-docs/Production/convert/Read_CND_files_with_color-merge_TXT_file",
                    },
                    {
                      text: "Create a color-merge TXT file",
                      link: "/wilcom-docs/Production/convert/Create_a_color-merge_TXT_file",
                    },
                  ],
                },
              ],
            },
            {
              text: "Embroidery Output",
              link: "/wilcom-docs/Production/output/Embroidery_Output",
              items: [
                {
                  text: "Sending designs to machine",
                  link: "/wilcom-docs/Production/output/Sending_designs_to_machine",
                  items: [
                    {
                      text: "Send designs to Connection Manager",
                      link: "/wilcom-docs/Production/output/Send_designs_to_Connection_Manager",
                    },
                    {
                      text: "Send designs to EmbroideryConnect",
                      link: "/wilcom-docs/Production/output/Send_designs_to_EmbroideryConnect",
                    },
                    {
                      text: "Send designs to Stitch Manager",
                      link: "/wilcom-docs/Production/output/Send_designs_to_Stitch_Manager",
                    },
                  ],
                },
                {
                  text: "Exporting designs for machine",
                  link: "/wilcom-docs/Production/output/Exporting_designs_for_machine",
                  items: [
                    {
                      text: "Export designs to machine file",
                      link: "/wilcom-docs/Production/output/Export_designs_to_machine_file",
                    },
                    {
                      text: "Save designs in Melco CND format",
                      link: "/wilcom-docs/Production/output/Save_designs_in_Melco_CND_format",
                    },
                    {
                      text: "Save designs in Singer CSD format",
                      link: "/wilcom-docs/Production/output/Save_designs_in_Singer_CSD_format",
                    },
                  ],
                },
                {
                  text: "Using embroidery disks",
                  link: "/wilcom-docs/Production/output/Using_embroidery_disks",
                  items: [
                    {
                      text: "Read designs from embroidery disk",
                      link: "/wilcom-docs/Production/output/Read_designs_from_embroidery_disk",
                    },
                    {
                      text: "Format embroidery disks",
                      link: "/wilcom-docs/Production/output/Format_embroidery_disks",
                    },
                    {
                      text: "Write designs to embroidery disk",
                      link: "/wilcom-docs/Production/output/Write_designs_to_embroidery_disk",
                    },
                  ],
                },
              ],
            },
            {
              text: "Machine Networking",
              link: "/wilcom-docs/Production/network/Machine_Networking",
              items: [
                {
                  text: "Network overview",
                  link: "/wilcom-docs/Production/network/Network_overview",
                  items: [
                    {
                      text: "What is an EmbroideryConnect network?",
                      link: "/wilcom-docs/Production/network/What_is_an_EmbroideryConnect_network",
                    },
                    {
                      text: "Usage scenarios",
                      link: "/wilcom-docs/Production/network/Usage_scenarios",
                    },
                    {
                      text: "EmbroideryConnect components",
                      link: "/wilcom-docs/Production/network/EmbroideryConnect_components",
                    },
                    {
                      text: "Third-party components",
                      link: "/wilcom-docs/Production/network/Third-party_components",
                    },
                    {
                      text: "EmbroideryConnect device",
                      link: "/wilcom-docs/Production/network/EmbroideryConnect_device",
                    },
                  ],
                },
                {
                  text: "EmbroideryConnect setup",
                  link: "/wilcom-docs/Production/network/EmbroideryConnect_setup",
                },
                {
                  text: "Basic device settings",
                  link: "/wilcom-docs/Production/network/Basic_device_settings",
                },
                {
                  text: "Advanced device settings",
                  link: "/wilcom-docs/Production/network/Advanced_device_settings",
                  items: [
                    {
                      text: "Configuring EC device memory size",
                      link: "/wilcom-docs/Production/network/Configuring_EC_device_memory_size",
                    },
                    {
                      text: "Tweaking machine compatibility",
                      link: "/wilcom-docs/Production/network/Tweaking_machine_compatibility",
                    },
                    {
                      text: "Configuring sub-folders for Barudan machines",
                      link: "/wilcom-docs/Production/network/Configuring_sub-folders_for_Barudan_machines",
                    },
                    {
                      text: "Adjusting proxy & network adapter settings",
                      link: "/wilcom-docs/Production/network/Adjusting_proxy_network_adapter_settings",
                    },
                  ],
                },
                {
                  text: "Sending designs to EmbroideryConnect",
                  link: "/wilcom-docs/Production/network/Sending_designs_to_EmbroideryConnect",
                  items: [
                    {
                      text: "Send designs to EmbroideryConnect device",
                      link: "/wilcom-docs/Production/network/Send_designs_to_EmbroideryConnect_device",
                    },
                    {
                      text: "Push designs to EmbroideryConnect design queue",
                      link: "/wilcom-docs/Production/network/Push_designs_to_EmbroideryConnect_design_queue",
                    },
                    {
                      text: "View & manage designs on EmbroideryHub",
                      link: "/wilcom-docs/Production/network/View_manage_designs_on_EmbroideryHub",
                    },
                  ],
                },
                {
                  text: "Troubleshooting EmbroideryConnect",
                  link: "/wilcom-docs/Production/network/Troubleshooting_EmbroideryConnect",
                  items: [
                    {
                      text: "Reset the device",
                      link: "/wilcom-docs/Production/network/Reset_the_device",
                    },
                    {
                      text: "Update the firmware",
                      link: "/wilcom-docs/Production/network/Update_the_firmware",
                    },
                  ],
                },
              ],
            },
          ],
          collapsed: true,
        },
        {
          text: "File Management",
          link: "/wilcom-docs/Management/PART_Management/PART_Management",
          items: [
            {
              text: "Design Management",
              link: "/wilcom-docs/Management/manage_designs/Design_Management",
              items: [
                {
                  text: "Design library layout",
                  link: "/wilcom-docs/Management/manage_designs/Design_library_layout",
                },
                {
                  text: "Viewing designs in network folders",
                  link: "/wilcom-docs/Management/manage_designs/Viewing_designs_in_network_folders",
                  items: [
                    {
                      text: "Change design display",
                      link: "/wilcom-docs/Management/manage_designs/Change_design_display",
                    },
                    {
                      text: "View design details",
                      link: "/wilcom-docs/Management/manage_designs/View_design_details",
                    },
                    {
                      text: "Group & sort designs",
                      link: "/wilcom-docs/Management/manage_designs/Group_sort_designs",
                    },
                    {
                      text: "View zipped designs",
                      link: "/wilcom-docs/Management/manage_designs/View_zipped_designs",
                    },
                  ],
                },
                {
                  text: "Opening designs from Design Library",
                  link: "/wilcom-docs/Management/manage_designs/Opening_designs_from_Design_Library",
                  items: [
                    {
                      text: "Filtering designs",
                      link: "/wilcom-docs/Management/manage_designs/Filtering_designs",
                    },
                    {
                      text: "Opening design files",
                      link: "/wilcom-docs/Management/manage_designs/Opening_design_files",
                    },
                    {
                      text: "Opening machine files",
                      link: "/wilcom-docs/Management/manage_designs/Opening_machine_files",
                    },
                    {
                      text: "Opening graphic files",
                      link: "/wilcom-docs/Management/manage_designs/Opening_graphic_files",
                    },
                    {
                      text: "Opening new files from existing",
                      link: "/wilcom-docs/Management/manage_designs/Opening_new_files_from_existing",
                    },
                  ],
                },
                {
                  text: "Inserting designs with Embroidery Clipart",
                  link: "/wilcom-docs/Management/manage_designs/Inserting_designs_with_Embroidery_Clipart",
                },
                {
                  text: "Viewing & managing design information",
                  link: "/wilcom-docs/Management/manage_designs/Viewing_managing_design_information",
                  items: [
                    {
                      text: "Summary tab",
                      link: "/wilcom-docs/Management/manage_designs/Summary_tab",
                    },
                    {
                      text: "Design tab",
                      link: "/wilcom-docs/Management/manage_designs/Design_tab",
                    },
                    {
                      text: "Order tab",
                      link: "/wilcom-docs/Management/manage_designs/Order_tab",
                    },
                    {
                      text: "Thread Colors tab",
                      link: "/wilcom-docs/Management/manage_designs/Thread_Colors_tab",
                    },
                    {
                      text: "Stitching tab",
                      link: "/wilcom-docs/Management/manage_designs/Stitching_tab",
                    },
                    {
                      text: "Runtime tab",
                      link: "/wilcom-docs/Management/manage_designs/Runtime_tab",
                    },
                  ],
                },
                {
                  text: "Locating designs in the library",
                  link: "/wilcom-docs/Management/manage_designs/Locating_designs_in_the_library",
                  items: [
                    {
                      text: "Searching the library",
                      link: "/wilcom-docs/Management/manage_designs/Searching_the_library",
                    },
                    {
                      text: "Adding folders to the library",
                      link: "/wilcom-docs/Management/manage_designs/Adding_folders_to_the_library",
                    },
                    {
                      text: "Fast searching on shared network drives",
                      link: "/wilcom-docs/Management/manage_designs/Fast_searching_on_shared_network_drives",
                    },
                  ],
                },
                {
                  text: "Managing quotes & orders",
                  link: "/wilcom-docs/Management/manage_designs/Managing_quotes_orders",
                  items: [
                    {
                      text: "Order details",
                      link: "/wilcom-docs/Management/manage_designs/Order_details",
                    },
                    {
                      text: "Production jobs",
                      link: "/wilcom-docs/Management/manage_designs/Production_jobs",
                    },
                    {
                      text: "Order tracking",
                      link: "/wilcom-docs/Management/manage_designs/Order_tracking",
                    },
                    {
                      text: "Order tracking by job role",
                      link: "/wilcom-docs/Management/manage_designs/Order_tracking_by_job_role",
                    },
                  ],
                },
                {
                  text: "Converting designs",
                  link: "/wilcom-docs/Management/manage_designs/Converting_designs",
                },
                {
                  text: "Outputting selected designs",
                  link: "/wilcom-docs/Management/manage_designs/Outputting_selected_designs",
                  items: [
                    {
                      text: "Sending designs to machine",
                      link: "/wilcom-docs/Management/manage_designs/Sending_designs_to_machine",
                    },
                    {
                      text: "Print selected designs",
                      link: "/wilcom-docs/Management/manage_designs/Print_selected_designs",
                    },
                    {
                      text: "Print design catalogs",
                      link: "/wilcom-docs/Management/manage_designs/Print_design_catalogs",
                    },
                    {
                      text: "Export design lists",
                      link: "/wilcom-docs/Management/manage_designs/Export_design_lists",
                    },
                  ],
                },
              ],
            },
            {
              text: "Asset Management",
              link: "/wilcom-docs/Management/manage_assets/Asset_Management",
              items: [
                {
                  text: "Custom assets in EmbroideryStudio",
                  link: "/wilcom-docs/Management/manage_assets/Custom_assets_in_EmbroideryStudio",
                },
                {
                  text: "Custom asset locations",
                  link: "/wilcom-docs/Management/manage_assets/Custom_asset_locations",
                },
                {
                  text: "Navigating to assets",
                  link: "/wilcom-docs/Management/manage_assets/Navigating_to_assets",
                },
                {
                  text: "Personal designs & artwork",
                  link: "/wilcom-docs/Management/manage_assets/Personal_designs_artwork",
                },
                {
                  text: "Showing hidden folders",
                  link: "/wilcom-docs/Management/manage_assets/Showing_hidden_folders",
                },
              ],
            },
            {
              text: "Product Visualizer Templates",
              link: "/wilcom-docs/Management/product_templates/Product_Visualizer_Templates",
              items: [
                {
                  text: "Preparing samples",
                  link: "/wilcom-docs/Management/product_templates/Preparing_samples",
                  items: [
                    {
                      text: "Choose suitable source images",
                      link: "/wilcom-docs/Management/product_templates/Choose_suitable_source_images",
                    },
                    {
                      text: "Crop the image",
                      link: "/wilcom-docs/Management/product_templates/Crop_the_image",
                    },
                    {
                      text: "Set image size",
                      link: "/wilcom-docs/Management/product_templates/Set_image_size",
                    },
                    {
                      text: "Set transparency",
                      link: "/wilcom-docs/Management/product_templates/Set_transparency",
                    },
                  ],
                },
                {
                  text: "Converting to grayscale",
                  link: "/wilcom-docs/Management/product_templates/Converting_to_grayscale",
                  items: [
                    {
                      text: "Convert to grayscale",
                      link: "/wilcom-docs/Management/product_templates/Convert_to_grayscale",
                    },
                    {
                      text: "Adjust image brightness and contrast",
                      link: "/wilcom-docs/Management/product_templates/Adjust_image_brightness_and_contrast",
                    },
                    {
                      text: "Save as PNG",
                      link: "/wilcom-docs/Management/product_templates/Save_as_PNG",
                    },
                  ],
                },
                {
                  text: "Preparing multi-color samples",
                  link: "/wilcom-docs/Management/product_templates/Preparing_multi-color_samples",
                  items: [
                    {
                      text: "Prepare the layers",
                      link: "/wilcom-docs/Management/product_templates/Prepare_the_layers",
                    },
                    {
                      text: "Convert to grayscale",
                      link: "/wilcom-docs/Management/product_templates/Convert_to_grayscale1",
                    },
                    {
                      text: "Save your layers",
                      link: "/wilcom-docs/Management/product_templates/Save_your_layers",
                    },
                  ],
                },
                {
                  text: "Deploying product templates",
                  link: "/wilcom-docs/Management/product_templates/Deploying_product_templates",
                  items: [
                    {
                      text: "Copy to folder location",
                      link: "/wilcom-docs/Management/product_templates/Copy_to_folder_location",
                    },
                    {
                      text: "Test product templates",
                      link: "/wilcom-docs/Management/product_templates/Test_product_templates",
                    },
                  ],
                },
              ],
            },
            {
              text: "Standard Fonts",
              link: "/wilcom-docs/Management/sample_fonts/Standard_Fonts",
              items: [
                {
                  text: "Roman fonts",
                  link: "/wilcom-docs/Management/sample_fonts/Roman_fonts",
                },
                {
                  text: "Non-Roman fonts",
                  link: "/wilcom-docs/Management/sample_fonts/Non-Roman_fonts",
                },
              ],
            },
            {
              text: "Custom Fonts",
              link: "/wilcom-docs/Management/custom_fonts/Custom_Fonts",
              items: [
                {
                  text: "Font considerations",
                  link: "/wilcom-docs/Management/custom_fonts/Font_considerations",
                },
                {
                  text: "Converting & editing TrueType fonts",
                  link: "/wilcom-docs/Management/custom_fonts/Converting_editing_TrueType_fonts",
                  items: [
                    {
                      text: "Experiment with conversion settings",
                      link: "/wilcom-docs/Management/custom_fonts/Experiment_with_conversion_settings",
                    },
                    {
                      text: "Refine turning stroke options",
                      link: "/wilcom-docs/Management/custom_fonts/Refine_turning_stroke_options",
                    },
                    {
                      text: "Convert entire TrueType font",
                      link: "/wilcom-docs/Management/custom_fonts/Convert_entire_TrueType_font",
                    },
                    {
                      text: "Edit & repackage generated letters",
                      link: "/wilcom-docs/Management/custom_fonts/Edit_repackage_generated_letters",
                    },
                  ],
                },
                {
                  text: "Digitizing custom fonts",
                  link: "/wilcom-docs/Management/custom_fonts/Digitizing_custom_fonts",
                  items: [
                    {
                      text: "Set fabric, background & machine format",
                      link: "/wilcom-docs/Management/custom_fonts/Set_fabric_background_machine_format",
                    },
                    {
                      text: "Set up grid & guides",
                      link: "/wilcom-docs/Management/custom_fonts/Set_up_grid_guides",
                    },
                    {
                      text: "Import & size the backdrop",
                      link: "/wilcom-docs/Management/custom_fonts/Import_size_the_backdrop",
                    },
                    {
                      text: "Digitize the letters",
                      link: "/wilcom-docs/Management/custom_fonts/Digitize_the_letters",
                    },
                    {
                      text: "Save custom font & letters",
                      link: "/wilcom-docs/Management/custom_fonts/Save_custom_font_letters",
                    },
                    {
                      text: "Test the font",
                      link: "/wilcom-docs/Management/custom_fonts/Test_the_font",
                    },
                  ],
                },
                {
                  text: "Creating multicolor fonts",
                  link: "/wilcom-docs/Management/custom_fonts/Creating_multicolor_fonts",
                  items: [
                    {
                      text: "Import the embroidery ornament",
                      link: "/wilcom-docs/Management/custom_fonts/Import_the_embroidery_ornament",
                    },
                    {
                      text: "Edit the font",
                      link: "/wilcom-docs/Management/custom_fonts/Edit_the_font",
                    },
                    {
                      text: "Save custom font & letters",
                      link: "/wilcom-docs/Management/custom_fonts/Save_custom_font_letters1",
                    },
                    {
                      text: "Test the font",
                      link: "/wilcom-docs/Management/custom_fonts/Test_the_font1",
                    },
                  ],
                },
                {
                  text: "Digitizing script fonts",
                  link: "/wilcom-docs/Management/custom_fonts/Digitizing_script_fonts",
                  items: [
                    {
                      text: "Set fabric, background & machine format",
                      link: "/wilcom-docs/Management/custom_fonts/Set_fabric_background_machine_format1",
                    },
                    {
                      text: "Import & size the backdrop",
                      link: "/wilcom-docs/Management/custom_fonts/Import_size_the_backdrop1",
                    },
                    {
                      text: "Digitize the letters",
                      link: "/wilcom-docs/Management/custom_fonts/Digitize_the_letters1",
                    },
                    {
                      text: "Save custom font & letters",
                      link: "/wilcom-docs/Management/custom_fonts/Save_custom_font_letters2",
                    },
                    {
                      text: "Test the font",
                      link: "/wilcom-docs/Management/custom_fonts/Test_the_font2",
                    },
                  ],
                },
              ],
            },
            {
              text: "Machine, File & Disk Types",
              link: "/wilcom-docs/Management/formats/Machine_File_Disk_Types",
              items: [
                {
                  text: "Supported machine types",
                  link: "/wilcom-docs/Management/formats/Supported_machine_types",
                },
                {
                  text: "Graphics and multi-decoration file formats",
                  link: "/wilcom-docs/Management/formats/Graphics_and_multi-decoration_file_formats",
                },
                {
                  text: "Embroidery file formats",
                  link: "/wilcom-docs/Management/formats/Embroidery_file_formats",
                  items: [
                    {
                      text: "Wilcom file formats",
                      link: "/wilcom-docs/Management/formats/Wilcom_file_formats",
                    },
                    {
                      text: "Supported design file formats",
                      link: "/wilcom-docs/Management/formats/Supported_design_file_formats",
                    },
                    {
                      text: "Supported machine file formats",
                      link: "/wilcom-docs/Management/formats/Supported_machine_file_formats",
                    },
                    {
                      text: "Supported bling file formats",
                      link: "/wilcom-docs/Management/formats/Supported_bling_file_formats",
                    },
                  ],
                },
                {
                  text: "Melco CND format",
                  link: "/wilcom-docs/Management/formats/Melco_CND_format",
                  items: [
                    {
                      text: "Conversion of Melco CND format to Wilcom EMB",
                      link: "/wilcom-docs/Management/formats/Conversion_of_Melco_CND_format_to_Wilcom_EMB",
                    },
                    {
                      text: "Conversion of Wilcom EMB format to Melco CND",
                      link: "/wilcom-docs/Management/formats/Conversion_of_Wilcom_EMB_format_to_Melco_CND",
                    },
                    {
                      text: "Best EmbroideryStudio input methods for Melco CND output",
                      link: "/wilcom-docs/Management/formats/Best_EmbroideryStudio_input_methods_for_Melco_CND_output",
                    },
                  ],
                },
                {
                  text: "Gunold PCH format",
                  link: "/wilcom-docs/Management/formats/Gunold_PCH_format",
                },
                {
                  text: "Wilcom INP format",
                  link: "/wilcom-docs/Management/formats/Wilcom_INP_format",
                },
                {
                  text: "Supported embroidery disk formats",
                  link: "/wilcom-docs/Management/formats/Supported_embroidery_disk_formats",
                },
              ],
            },
          ],
          collapsed: true,
        },
        {
          text: "Applied Decoration",
          link: "/wilcom-docs/Applied/PART_Applied/PART_Applied",
          items: [
            {
              text: "Mixed Decoration",
              link: "/wilcom-docs/Applied/mixed/Mixed_Decoration",
              items: [
                {
                  text: "Virtual embroidery",
                  link: "/wilcom-docs/Applied/mixed/Virtual_embroidery",
                  items: [
                    {
                      text: "Output embroidery as virtual decoration",
                      link: "/wilcom-docs/Applied/mixed/Output_embroidery_as_virtual_decoration",
                    },
                    {
                      text: "Output combined virtual embroidery & print",
                      link: "/wilcom-docs/Applied/mixed/Output_combined_virtual_embroidery_print",
                    },
                    {
                      text: "Output combined virtual & actual embroidery",
                      link: "/wilcom-docs/Applied/mixed/Output_combined_virtual_actual_embroidery",
                    },
                  ],
                },
                {
                  text: "Cording",
                  link: "/wilcom-docs/Applied/mixed/Cording",
                  items: [
                    {
                      text: "Designing for cording",
                      link: "/wilcom-docs/Applied/mixed/Designing_for_cording",
                    },
                    {
                      text: "Create cording designs",
                      link: "/wilcom-docs/Applied/mixed/Create_cording_designs",
                    },
                  ],
                },
                {
                  text: "Boring",
                  link: "/wilcom-docs/Applied/mixed/Boring",
                  items: [
                    {
                      text: "Prototype boring",
                      link: "/wilcom-docs/Applied/mixed/Prototype_boring",
                    },
                    {
                      text: "Select machine format",
                      link: "/wilcom-docs/Applied/mixed/Select_machine_format",
                    },
                    {
                      text: "Digitize boring holes",
                      link: "/wilcom-docs/Applied/mixed/Digitize_boring_holes",
                    },
                    {
                      text: "Combine boring with other techniques",
                      link: "/wilcom-docs/Applied/mixed/Combine_boring_with_other_techniques",
                    },
                    {
                      text: "Productivity techniques",
                      link: "/wilcom-docs/Applied/mixed/Productivity_techniques",
                    },
                    {
                      text: "Boring output",
                      link: "/wilcom-docs/Applied/mixed/Boring_output",
                    },
                  ],
                },
              ],
            },
            {
              text: "Sequin Embroidery",
              link: "/wilcom-docs/Applied/sequin_basics/Sequin_Embroidery",
              items: [
                {
                  text: "Selecting sequin mode",
                  link: "/wilcom-docs/Applied/sequin_basics/Selecting_sequin_mode",
                  items: [
                    {
                      text: "Machine capabilities",
                      link: "/wilcom-docs/Applied/sequin_basics/Machine_capabilities",
                    },
                    {
                      text: "Sequin machine formats",
                      link: "/wilcom-docs/Applied/sequin_basics/Sequin_machine_formats",
                    },
                    {
                      text: "Select sequin-capable machines",
                      link: "/wilcom-docs/Applied/sequin_basics/Select_sequin-capable_machines",
                    },
                  ],
                },
                {
                  text: "Visualizing sequin designs",
                  link: "/wilcom-docs/Applied/sequin_basics/Visualizing_sequin_designs",
                },
                {
                  text: "Setting up sequin palettes",
                  link: "/wilcom-docs/Applied/sequin_basics/Setting_up_sequin_palettes",
                },
                {
                  text: "Digitizing sequin runs",
                  link: "/wilcom-docs/Applied/sequin_basics/Digitizing_sequin_runs",
                },
                {
                  text: "Sequin fixings",
                  link: "/wilcom-docs/Applied/sequin_basics/Sequin_fixings",
                  items: [
                    {
                      text: "Apply sequin fixings",
                      link: "/wilcom-docs/Applied/sequin_basics/Apply_sequin_fixings",
                    },
                    {
                      text: "Set drop-stitch direction",
                      link: "/wilcom-docs/Applied/sequin_basics/Set_drop-stitch_direction",
                    },
                  ],
                },
                {
                  text: "Creating multi-sequin runs",
                  link: "/wilcom-docs/Applied/sequin_basics/Creating_multi-sequin_runs",
                  items: [
                    {
                      text: "Stacked sequins",
                      link: "/wilcom-docs/Applied/sequin_basics/Stacked_sequins",
                    },
                    {
                      text: "Apply multi-sequin run patterns",
                      link: "/wilcom-docs/Applied/sequin_basics/Apply_multi-sequin_run_patterns",
                    },
                    {
                      text: "Create multi-sequin run patterns",
                      link: "/wilcom-docs/Applied/sequin_basics/Create_multi-sequin_run_patterns",
                    },
                  ],
                },
                {
                  text: "Editing sequin runs",
                  link: "/wilcom-docs/Applied/sequin_basics/Editing_sequin_runs",
                },
              ],
            },
            {
              text: "Advanced Sequins",
              link: "/wilcom-docs/Applied/sequin_advanced/Advanced_Sequins",
              items: [
                {
                  text: "Creating sequin fills",
                  link: "/wilcom-docs/Applied/sequin_advanced/Creating_sequin_fills",
                  items: [
                    {
                      text: "Digitize sequin fills",
                      link: "/wilcom-docs/Applied/sequin_advanced/Digitize_sequin_fills",
                    },
                    {
                      text: "Adjust sequin layouts",
                      link: "/wilcom-docs/Applied/sequin_advanced/Adjust_sequin_layouts",
                    },
                  ],
                },
                {
                  text: "Adding sequin borders",
                  link: "/wilcom-docs/Applied/sequin_advanced/Adding_sequin_borders",
                },
                {
                  text: "Special sequin fills",
                  link: "/wilcom-docs/Applied/sequin_advanced/Special_sequin_fills",
                  items: [
                    {
                      text: "Fancy sequin fills",
                      link: "/wilcom-docs/Applied/sequin_advanced/Fancy_sequin_fills",
                    },
                    {
                      text: "Flip sequins",
                      link: "/wilcom-docs/Applied/sequin_advanced/Flip_sequins",
                    },
                  ],
                },
                {
                  text: "Creating multi-sequin fills",
                  link: "/wilcom-docs/Applied/sequin_advanced/Creating_multi-sequin_fills",
                },
                {
                  text: "Editing sequin fills",
                  link: "/wilcom-docs/Applied/sequin_advanced/Editing_sequin_fills",
                },
                {
                  text: "Converting objects to sequins",
                  link: "/wilcom-docs/Applied/sequin_advanced/Converting_objects_to_sequins",
                  items: [
                    {
                      text: "Convert embroidery objects to sequins",
                      link: "/wilcom-docs/Applied/sequin_advanced/Convert_embroidery_objects_to_sequins",
                    },
                    {
                      text: "Convert sequin artwork",
                      link: "/wilcom-docs/Applied/sequin_advanced/Convert_sequin_artwork",
                    },
                  ],
                },
                {
                  text: "Manual sequin digitizing",
                  link: "/wilcom-docs/Applied/sequin_advanced/Manual_sequin_digitizing",
                  items: [
                    {
                      text: "Digitize sequin drops with fixings",
                      link: "/wilcom-docs/Applied/sequin_advanced/Digitize_sequin_drops_with_fixings",
                    },
                    {
                      text: "Insert sequin drops",
                      link: "/wilcom-docs/Applied/sequin_advanced/Insert_sequin_drops",
                    },
                  ],
                },
                {
                  text: "Custom sequins",
                  link: "/wilcom-docs/Applied/sequin_advanced/Custom_sequins",
                  items: [
                    {
                      text: "Create sequin shapes",
                      link: "/wilcom-docs/Applied/sequin_advanced/Create_sequin_shapes",
                    },
                    {
                      text: "Create sequin fixings",
                      link: "/wilcom-docs/Applied/sequin_advanced/Create_sequin_fixings",
                    },
                  ],
                },
                {
                  text: "Outputting sequin designs",
                  link: "/wilcom-docs/Applied/sequin_advanced/Outputting_sequin_designs",
                },
              ],
            },
            {
              text: "Bead Embroidery",
              link: "/wilcom-docs/Applied/beading/Bead_Embroidery",
              items: [
                {
                  text: "Beading mode",
                  link: "/wilcom-docs/Applied/beading/Beading_mode",
                  items: [
                    {
                      text: "Machine beading",
                      link: "/wilcom-docs/Applied/beading/Machine_beading",
                    },
                    {
                      text: "Select bead-capable machines",
                      link: "/wilcom-docs/Applied/beading/Select_bead-capable_machines",
                    },
                    {
                      text: "Visualize bead designs",
                      link: "/wilcom-docs/Applied/beading/Visualize_bead_designs",
                    },
                  ],
                },
                {
                  text: "Creating bead runs",
                  link: "/wilcom-docs/Applied/beading/Creating_bead_runs",
                  items: [
                    {
                      text: "Set up bead palette",
                      link: "/wilcom-docs/Applied/beading/Set_up_bead_palette",
                    },
                    {
                      text: "Digitize bead runs",
                      link: "/wilcom-docs/Applied/beading/Digitize_bead_runs",
                    },
                    {
                      text: "Create patterned bead runs",
                      link: "/wilcom-docs/Applied/beading/Create_patterned_bead_runs",
                    },
                  ],
                },
                {
                  text: "Bead fixings",
                  link: "/wilcom-docs/Applied/beading/Bead_fixings",
                  items: [
                    {
                      text: "Bead fixing considerations",
                      link: "/wilcom-docs/Applied/beading/Bead_fixing_considerations",
                    },
                    {
                      text: "Apply bead fixings",
                      link: "/wilcom-docs/Applied/beading/Apply_bead_fixings",
                    },
                  ],
                },
                {
                  text: "Editing bead runs",
                  link: "/wilcom-docs/Applied/beading/Editing_bead_runs",
                  items: [
                    {
                      text: "Convert objects to bead runs",
                      link: "/wilcom-docs/Applied/beading/Convert_objects_to_bead_runs",
                    },
                    {
                      text: "Edit bead runs",
                      link: "/wilcom-docs/Applied/beading/Edit_bead_runs",
                    },
                  ],
                },
                {
                  text: "Manual bead digitizing",
                  link: "/wilcom-docs/Applied/beading/Manual_bead_digitizing",
                  items: [
                    {
                      text: "Digitize manual bead drops",
                      link: "/wilcom-docs/Applied/beading/Digitize_manual_bead_drops",
                    },
                    {
                      text: "Insert bead drops",
                      link: "/wilcom-docs/Applied/beading/Insert_bead_drops",
                    },
                    {
                      text: "Custom bead motifs",
                      link: "/wilcom-docs/Applied/beading/Custom_bead_motifs",
                    },
                  ],
                },
                {
                  text: "Bead encoding & decoding",
                  link: "/wilcom-docs/Applied/beading/Bead_encoding_decoding",
                },
              ],
            },
            {
              text: "Bling Digitizing",
              link: "/wilcom-docs/Applied/bling/Bling_Digitizing",
              items: [
                {
                  text: "Bling production processes",
                  link: "/wilcom-docs/Applied/bling/Bling_production_processes",
                },
                {
                  text: "Setting up bling palettes",
                  link: "/wilcom-docs/Applied/bling/Setting_up_bling_palettes",
                },
                {
                  text: "Creating bling runs & fills",
                  link: "/wilcom-docs/Applied/bling/Creating_bling_runs_fills",
                  items: [
                    {
                      text: "Digitize bling runs",
                      link: "/wilcom-docs/Applied/bling/Digitize_bling_runs",
                    },
                    {
                      text: "Place rhinestones manually",
                      link: "/wilcom-docs/Applied/bling/Place_rhinestones_manually",
                    },
                    {
                      text: "Create bling fills",
                      link: "/wilcom-docs/Applied/bling/Create_bling_fills",
                    },
                    {
                      text: "Add bling borders",
                      link: "/wilcom-docs/Applied/bling/Add_bling_borders",
                    },
                  ],
                },
                {
                  text: "Modifying bling objects",
                  link: "/wilcom-docs/Applied/bling/Modifying_bling_objects",
                  items: [
                    {
                      text: "Transform bling-fill objects",
                      link: "/wilcom-docs/Applied/bling/Transform_bling-fill_objects",
                    },
                    {
                      text: "Reshape bling-fill objects",
                      link: "/wilcom-docs/Applied/bling/Reshape_bling-fill_objects",
                    },
                    {
                      text: "Edit bling-fill objects",
                      link: "/wilcom-docs/Applied/bling/Edit_bling-fill_objects",
                    },
                    {
                      text: "Convert objects to bling",
                      link: "/wilcom-docs/Applied/bling/Convert_objects_to_bling",
                    },
                  ],
                },
                {
                  text: "Creating bling lettering",
                  link: "/wilcom-docs/Applied/bling/Creating_bling_lettering",
                },
                {
                  text: "Outputting bling",
                  link: "/wilcom-docs/Applied/bling/Outputting_bling",
                },
              ],
            },
            {
              text: "Appliqué Embroidery",
              link: "/wilcom-docs/Applied/applique/Appliqu%C3%A9_Embroidery",
              items: [
                {
                  text: "Creating appliqué embroidery",
                  link: "/wilcom-docs/Applied/applique/Creating_appliqu%C3%A9_embroidery",
                  items: [
                    {
                      text: "Convert vector graphics to appliqué",
                      link: "/wilcom-docs/Applied/applique/Convert_vector_graphics_to_appliqu%C3%A9",
                    },
                    {
                      text: "Digitize appliqué objects",
                      link: "/wilcom-docs/Applied/applique/Digitize_appliqu%C3%A9_objects",
                    },
                    {
                      text: "Convert embroidery objects to appliqué",
                      link: "/wilcom-docs/Applied/applique/Convert_embroidery_objects_to_appliqu%C3%A9",
                    },
                  ],
                },
                {
                  text: "Adjusting appliqué settings",
                  link: "/wilcom-docs/Applied/applique/Adjusting_appliqu%C3%A9_settings",
                  items: [
                    {
                      text: "Add fabric swatches to appliqué",
                      link: "/wilcom-docs/Applied/applique/Add_fabric_swatches_to_appliqu%C3%A9",
                    },
                    {
                      text: "Adjust guide run settings",
                      link: "/wilcom-docs/Applied/applique/Adjust_guide_run_settings",
                    },
                    {
                      text: "Adjust tack stitch settings",
                      link: "/wilcom-docs/Applied/applique/Adjust_tack_stitch_settings",
                    },
                    {
                      text: "Adjust cover stitch settings",
                      link: "/wilcom-docs/Applied/applique/Adjust_cover_stitch_settings",
                    },
                    {
                      text: "Adjust frame-out positions",
                      link: "/wilcom-docs/Applied/applique/Adjust_frame-out_positions",
                    },
                  ],
                },
                {
                  text: "Combining appliqué",
                  link: "/wilcom-docs/Applied/applique/Combining_appliqu%C3%A9",
                  items: [
                    {
                      text: "Create partial cover appliqué",
                      link: "/wilcom-docs/Applied/applique/Create_partial_cover_appliqu%C3%A9",
                    },
                    {
                      text: "Resequence appliqué components",
                      link: "/wilcom-docs/Applied/applique/Resequence_appliqu%C3%A9_components",
                    },
                  ],
                },
                {
                  text: "Outputting appliqué",
                  link: "/wilcom-docs/Applied/applique/Outputting_appliqu%C3%A9",
                },
              ],
            },
            {
              text: "Multi-Decoration Output",
              link: "/wilcom-docs/Applied/export/Multi-Decoration_Output",
              items: [
                {
                  text: "Multi-decoration types",
                  link: "/wilcom-docs/Applied/export/Multi-decoration_types",
                  items: [
                    {
                      text: "Print designs",
                      link: "/wilcom-docs/Applied/export/Print_designs",
                    },
                    {
                      text: "Appliqué designs",
                      link: "/wilcom-docs/Applied/export/Appliqu%C3%A9_designs",
                    },
                    {
                      text: "Bling designs",
                      link: "/wilcom-docs/Applied/export/Bling_designs",
                    },
                  ],
                },
                {
                  text: "Printing designs in CorelDRAW Graphics",
                  link: "/wilcom-docs/Applied/export/Printing_designs_in_CorelDRAW_Graphics",
                },
                {
                  text: "Exporting embroidery as vectors",
                  link: "/wilcom-docs/Applied/export/Exporting_embroidery_as_vectors",
                },
                {
                  text: "Exporting multiple decoration files",
                  link: "/wilcom-docs/Applied/export/Exporting_multiple_decoration_files",
                  items: [
                    {
                      text: "Export design components",
                      link: "/wilcom-docs/Applied/export/Export_design_components",
                    },
                    {
                      text: "Set export locations",
                      link: "/wilcom-docs/Applied/export/Set_export_locations",
                    },
                    {
                      text: "Export selected objects",
                      link: "/wilcom-docs/Applied/export/Export_selected_objects",
                    },
                    {
                      text: "File naming conventions",
                      link: "/wilcom-docs/Applied/export/File_naming_conventions",
                    },
                  ],
                },
                {
                  text: "Outputting appliqué for production",
                  link: "/wilcom-docs/Applied/export/Outputting_appliqu%C3%A9_for_production",
                  items: [
                    {
                      text: "Print appliqué patterns",
                      link: "/wilcom-docs/Applied/export/Print_appliqu%C3%A9_patterns",
                    },
                    {
                      text: "Cut appliqué shapes",
                      link: "/wilcom-docs/Applied/export/Cut_appliqu%C3%A9_shapes",
                    },
                  ],
                },
                {
                  text: "Outputting bling for production",
                  link: "/wilcom-docs/Applied/export/Outputting_bling_for_production",
                  items: [
                    {
                      text: "Send bling to CAMS machine",
                      link: "/wilcom-docs/Applied/export/Send_bling_to_CAMS_machine",
                    },
                    {
                      text: "Output to bling cutter",
                      link: "/wilcom-docs/Applied/export/Output_to_bling_cutter",
                    },
                    {
                      text: "Convert bling for production",
                      link: "/wilcom-docs/Applied/export/Convert_bling_for_production",
                    },
                  ],
                },
              ],
            },
          ],
          collapsed: true,
        },
        {
          text: "Chenille Embroidery",
          link: "/wilcom-docs/Chenille/PART_Chenille/PART_Chenille",
          items: [
            {
              text: "Chenille Basics",
              link: "/wilcom-docs/Chenille/chenille_basics/Chenille_Basics",
              items: [
                {
                  text: "Digitizing for chenille",
                  link: "/wilcom-docs/Chenille/chenille_basics/Digitizing_for_chenille",
                  items: [
                    {
                      text: "Chenille stitch types",
                      link: "/wilcom-docs/Chenille/chenille_basics/Chenille_stitch_types",
                    },
                    {
                      text: "Chenille fill patterns",
                      link: "/wilcom-docs/Chenille/chenille_basics/Chenille_fill_patterns",
                    },
                    {
                      text: "Chenille input methods",
                      link: "/wilcom-docs/Chenille/chenille_basics/Chenille_input_methods",
                    },
                    {
                      text: "Compound chenille",
                      link: "/wilcom-docs/Chenille/chenille_basics/Compound_chenille",
                    },
                    {
                      text: "Chenille runs & borders",
                      link: "/wilcom-docs/Chenille/chenille_basics/Chenille_runs_borders",
                    },
                  ],
                },
                {
                  text: "Chenille design parameters",
                  link: "/wilcom-docs/Chenille/chenille_basics/Chenille_design_parameters",
                  items: [
                    {
                      text: "Needle height",
                      link: "/wilcom-docs/Chenille/chenille_basics/Needle_height",
                    },
                    {
                      text: "Stitch length",
                      link: "/wilcom-docs/Chenille/chenille_basics/Stitch_length",
                    },
                    {
                      text: "Other parameters",
                      link: "/wilcom-docs/Chenille/chenille_basics/Other_parameters",
                    },
                  ],
                },
                {
                  text: "Visualizing chenille stitching",
                  link: "/wilcom-docs/Chenille/chenille_basics/Visualizing_chenille_stitching",
                },
                {
                  text: "Handling chenille designs",
                  link: "/wilcom-docs/Chenille/chenille_basics/Handling_chenille_designs",
                  items: [
                    {
                      text: "Start a new chenille design",
                      link: "/wilcom-docs/Chenille/chenille_basics/Start_a_new_chenille_design",
                    },
                    {
                      text: "Standard machine formats",
                      link: "/wilcom-docs/Chenille/chenille_basics/Standard_machine_formats",
                    },
                    {
                      text: "Open & save chenille designs",
                      link: "/wilcom-docs/Chenille/chenille_basics/Open_save_chenille_designs",
                    },
                  ],
                },
              ],
            },
            {
              text: "Chenille Digitizing",
              link: "/wilcom-docs/Chenille/chenille_digitizing/Chenille_Digitizing",
              items: [
                {
                  text: "Creating compound chenille",
                  link: "/wilcom-docs/Chenille/chenille_digitizing/Creating_compound_chenille",
                  items: [
                    {
                      text: "Chenille fill pattern usage",
                      link: "/wilcom-docs/Chenille/chenille_digitizing/Chenille_fill_pattern_usage",
                    },
                    {
                      text: "Create compound chenille objects",
                      link: "/wilcom-docs/Chenille/chenille_digitizing/Create_compound_chenille_objects",
                    },
                    {
                      text: "Convert lockstitch to chenille",
                      link: "/wilcom-docs/Chenille/chenille_digitizing/Convert_lockstitch_to_chenille",
                    },
                  ],
                },
                {
                  text: "Creating chain-stitch fills",
                  link: "/wilcom-docs/Chenille/chenille_digitizing/Creating_chain-stitch_fills",
                },
                {
                  text: "Creating narrow chenille shapes",
                  link: "/wilcom-docs/Chenille/chenille_digitizing/Creating_narrow_chenille_shapes",
                  items: [
                    {
                      text: "Create narrow shapes of varying width",
                      link: "/wilcom-docs/Chenille/chenille_digitizing/Create_narrow_shapes_of_varying_width",
                    },
                    {
                      text: "Create narrow shapes of constant width",
                      link: "/wilcom-docs/Chenille/chenille_digitizing/Create_narrow_shapes_of_constant_width",
                    },
                  ],
                },
                {
                  text: "Creating chenille borders",
                  link: "/wilcom-docs/Chenille/chenille_digitizing/Creating_chenille_borders",
                },
                {
                  text: "Compound chenille settings",
                  link: "/wilcom-docs/Chenille/chenille_digitizing/Compound_chenille_settings",
                  items: [
                    {
                      text: "Border settings",
                      link: "/wilcom-docs/Chenille/chenille_digitizing/Border_settings",
                    },
                    {
                      text: "Other settings",
                      link: "/wilcom-docs/Chenille/chenille_digitizing/Other_settings",
                    },
                  ],
                },
                {
                  text: "Controlling needle heights",
                  link: "/wilcom-docs/Chenille/chenille_digitizing/Controlling_needle_heights",
                },
              ],
            },
            {
              text: "Chenille Lettering",
              link: "/wilcom-docs/Chenille/chenille_lettering/Chenille_Lettering",
              items: [
                {
                  text: "Adding lettering to chenille designs",
                  link: "/wilcom-docs/Chenille/chenille_lettering/Adding_lettering_to_chenille_designs",
                },
                {
                  text: "Scaling chenille lettering",
                  link: "/wilcom-docs/Chenille/chenille_lettering/Scaling_chenille_lettering",
                },
                {
                  text: "Using other fonts with chenille",
                  link: "/wilcom-docs/Chenille/chenille_lettering/Using_other_fonts_with_chenille",
                },
              ],
            },
            {
              text: "Chenille Output",
              link: "/wilcom-docs/Chenille/chenille_output/Chenille_Output",
              items: [
                {
                  text: "Chenille machine formats",
                  link: "/wilcom-docs/Chenille/chenille_output/Chenille_machine_formats",
                  items: [
                    {
                      text: "Switch machine formats",
                      link: "/wilcom-docs/Chenille/chenille_output/Switch_machine_formats",
                    },
                    {
                      text: "Combined chenille & lockstitch",
                      link: "/wilcom-docs/Chenille/chenille_output/Combined_chenille_lockstitch",
                    },
                    {
                      text: "Modify format for specific designs",
                      link: "/wilcom-docs/Chenille/chenille_output/Modify_format_for_specific_designs",
                    },
                    {
                      text: "Modify standard formats",
                      link: "/wilcom-docs/Chenille/chenille_output/Modify_standard_formats",
                    },
                    {
                      text: "Create custom formats",
                      link: "/wilcom-docs/Chenille/chenille_output/Create_custom_formats",
                    },
                    {
                      text: "Check control commands",
                      link: "/wilcom-docs/Chenille/chenille_output/Check_control_commands",
                    },
                  ],
                },
                {
                  text: "Machine format settings",
                  link: "/wilcom-docs/Chenille/chenille_output/Machine_format_settings",
                  items: [
                    {
                      text: "Chenille machine format values",
                      link: "/wilcom-docs/Chenille/chenille_output/Chenille_machine_format_values",
                    },
                    {
                      text: "Minimal & maximal stitch values",
                      link: "/wilcom-docs/Chenille/chenille_output/Minimal_maximal_stitch_values",
                    },
                    {
                      text: "Shortcut angle values",
                      link: "/wilcom-docs/Chenille/chenille_output/Shortcut_angle_values",
                    },
                    {
                      text: "Color-change values",
                      link: "/wilcom-docs/Chenille/chenille_output/Color-change_values",
                    },
                    {
                      text: "Trim functions",
                      link: "/wilcom-docs/Chenille/chenille_output/Trim_functions",
                    },
                    {
                      text: "Needle height default",
                      link: "/wilcom-docs/Chenille/chenille_output/Needle_height_default",
                    },
                    {
                      text: "Borer functions",
                      link: "/wilcom-docs/Chenille/chenille_output/Borer_functions",
                    },
                    {
                      text: "Color-change sequence",
                      link: "/wilcom-docs/Chenille/chenille_output/Color-change_sequence",
                    },
                    {
                      text: "Start/end of design sequence",
                      link: "/wilcom-docs/Chenille/chenille_output/Start_end_of_design_sequence",
                    },
                  ],
                },
                {
                  text: "Chenille machine files",
                  link: "/wilcom-docs/Chenille/chenille_output/Chenille_machine_files",
                  items: [
                    {
                      text: "Read chenille designs",
                      link: "/wilcom-docs/Chenille/chenille_output/Read_chenille_designs",
                    },
                    {
                      text: "Chenille machine file encoding",
                      link: "/wilcom-docs/Chenille/chenille_output/Chenille_machine_file_encoding",
                    },
                  ],
                },
                {
                  text: "Outputting chenille designs",
                  link: "/wilcom-docs/Chenille/chenille_output/Outputting_chenille_designs",
                  items: [
                    {
                      text: "Export chenille designs",
                      link: "/wilcom-docs/Chenille/chenille_output/Export_chenille_designs",
                    },
                    {
                      text: "Send chenille designs to machine",
                      link: "/wilcom-docs/Chenille/chenille_output/Send_chenille_designs_to_machine",
                    },
                    {
                      text: "Output to Tajima chenille machines",
                      link: "/wilcom-docs/Chenille/chenille_output/Output_to_Tajima_chenille_machines",
                    },
                  ],
                },
              ],
            },
          ],
          collapsed: true,
        },
        {
          text: "Cross Stitch Embroidery",
          link: "/wilcom-docs/CrossStitch/PART_CrossStitch/PART_CrossStitch",
          items: [
            {
              text: "Cross Stitch Essentials",
              link: "/wilcom-docs/CrossStitch/cross-stitch_essentials/Cross_Stitch_Essentials",
              items: [
                {
                  text: "Opening ES Cross Stitch",
                  link: "/wilcom-docs/CrossStitch/cross-stitch_essentials/Opening_ES_Cross_Stitch",
                },
                {
                  text: "Setting up work environment",
                  link: "/wilcom-docs/CrossStitch/cross-stitch_essentials/Setting_up_work_environment",
                  items: [
                    {
                      text: "Set design size",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_essentials/Set_design_size",
                    },
                    {
                      text: "Adjust grid settings",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_essentials/Adjust_grid_settings",
                    },
                    {
                      text: "Change hoop settings",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_essentials/Change_hoop_settings",
                    },
                    {
                      text: "Set background colors & fabrics",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_essentials/Set_background_colors_fabrics",
                    },
                  ],
                },
                {
                  text: "Working with backdrops",
                  link: "/wilcom-docs/CrossStitch/cross-stitch_essentials/Working_with_backdrops",
                  items: [
                    {
                      text: "Insert bitmap images",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_essentials/Insert_bitmap_images",
                    },
                    {
                      text: "View or hide backdrops",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_essentials/View_or_hide_backdrops",
                    },
                    {
                      text: "Scale & transform bitmap images",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_essentials/Scale_transform_bitmap_images",
                    },
                  ],
                },
                {
                  text: "Viewing cross stitch designs",
                  link: "/wilcom-docs/CrossStitch/cross-stitch_essentials/Viewing_cross_stitch_designs",
                  items: [
                    {
                      text: "View stitches as crosses or tiles",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_essentials/View_stitches_as_crosses_or_tiles",
                    },
                    {
                      text: "View design information",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_essentials/View_design_information",
                    },
                  ],
                },
                {
                  text: "Handling cross stitch design files",
                  link: "/wilcom-docs/CrossStitch/cross-stitch_essentials/Handling_cross_stitch_design_files",
                  items: [
                    {
                      text: "Generate stitches",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_essentials/Generate_stitches",
                    },
                    {
                      text: "Save cross stitch designs",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_essentials/Save_cross_stitch_designs",
                    },
                    {
                      text: "Use cross stitch with EmbroideryStudio",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_essentials/Use_cross_stitch_with_EmbroideryStudio",
                    },
                  ],
                },
              ],
            },
            {
              text: "Cross Stitch Digitizing",
              link: "/wilcom-docs/CrossStitch/cross-stitch_digitizing/Cross_Stitch_Digitizing",
              items: [
                {
                  text: "Digitizing with cross stitches",
                  link: "/wilcom-docs/CrossStitch/cross-stitch_digitizing/Digitizing_with_cross_stitches",
                  items: [
                    {
                      text: "Set stitch color & type",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_digitizing/Set_stitch_color_type",
                    },
                    {
                      text: "Set stitch density",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_digitizing/Set_stitch_density",
                    },
                    {
                      text: "Digitize cross stitch fills",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_digitizing/Digitize_cross_stitch_fills",
                    },
                    {
                      text: "Digitize cross stitch outlines",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_digitizing/Digitize_cross_stitch_outlines",
                    },
                    {
                      text: "Digitize single stitches or lines",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_digitizing/Digitize_single_stitches_or_lines",
                    },
                    {
                      text: "Digitize circles",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_digitizing/Digitize_circles",
                    },
                  ],
                },
                {
                  text: "Digitizing backdrops automatically",
                  link: "/wilcom-docs/CrossStitch/cross-stitch_digitizing/Digitizing_backdrops_automatically",
                  items: [
                    {
                      text: "Digitize images automatically",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_digitizing/Digitize_images_automatically",
                    },
                    {
                      text: "Flood-fill color blocks",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_digitizing/Flood-fill_color_blocks",
                    },
                  ],
                },
                {
                  text: "Digitizing cross stitch letters",
                  link: "/wilcom-docs/CrossStitch/cross-stitch_digitizing/Digitizing_cross_stitch_letters",
                },
              ],
            },
            {
              text: "Cross Stitch Editing",
              link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Cross_Stitch_Editing",
              items: [
                {
                  text: "Selecting & locking stitches",
                  link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Selecting_locking_stitches",
                  items: [
                    {
                      text: "Select cross stitches with Select tools",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Select_cross_stitches_with_Select_tools",
                    },
                    {
                      text: "Select cross stitches with Auto Select",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Select_cross_stitches_with_Auto_Select",
                    },
                    {
                      text: "Lock cross stitches",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Lock_cross_stitches",
                    },
                  ],
                },
                {
                  text: "Simple stitch editing",
                  link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Simple_stitch_editing",
                  items: [
                    {
                      text: "Copy, cut & paste stitch blocks",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Copy_cut_paste_stitch_blocks",
                    },
                    {
                      text: "Change stitch block settings",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Change_stitch_block_settings",
                    },
                    {
                      text: "Erase fills & single lines",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Erase_fills_single_lines",
                    },
                  ],
                },
                {
                  text: "Transforming stitch blocks",
                  link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Transforming_stitch_blocks",
                  items: [
                    {
                      text: "Move cross stitch blocks",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Move_cross_stitch_blocks",
                    },
                    {
                      text: "Rotate cross stitch blocks",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Rotate_cross_stitch_blocks",
                    },
                    {
                      text: "Mirror cross stitch blocks",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Mirror_cross_stitch_blocks",
                    },
                  ],
                },
                {
                  text: "Special editing techniques",
                  link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Special_editing_techniques",
                  items: [
                    {
                      text: "Rubber stamp fills",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Rubber_stamp_fills",
                    },
                    {
                      text: "Create combination stitches",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Create_combination_stitches",
                    },
                    {
                      text: "Add borders to selected areas",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Add_borders_to_selected_areas",
                    },
                  ],
                },
                {
                  text: "Adjusting thread colors",
                  link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Adjusting_thread_colors",
                  items: [
                    {
                      text: "Change thread colors",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Change_thread_colors",
                    },
                    {
                      text: "Search for threads",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Search_for_threads",
                    },
                    {
                      text: "Edit thread colors",
                      link: "/wilcom-docs/CrossStitch/cross-stitch_editing/Edit_thread_colors",
                    },
                  ],
                },
              ],
            },
          ],
          collapsed: true,
        },
        {
          text: "Software Summary",
          link: "/wilcom-docs/Summary/PART_Summary/PART_Summary",
          items: [
            {
              text: "Design Handling",
              link: "/wilcom-docs/Summary/summary_-_designs/Design_Handling",
              items: [
                {
                  text: "Operating modes",
                  link: "/wilcom-docs/Summary/summary_-_designs/Operating_modes",
                },
                {
                  text: "Design management",
                  link: "/wilcom-docs/Summary/summary_-_designs/Design_management",
                  items: [
                    {
                      text: "View designs in network folders",
                      link: "/wilcom-docs/Summary/summary_-_designs/View_designs_in_network_folders",
                    },
                    {
                      text: "Open design files",
                      link: "/wilcom-docs/Summary/summary_-_designs/Open_design_files",
                    },
                    {
                      text: "Manage design information",
                      link: "/wilcom-docs/Summary/summary_-_designs/Manage_design_information",
                    },
                    {
                      text: "Add folders to the library",
                      link: "/wilcom-docs/Summary/summary_-_designs/Add_folders_to_the_library",
                    },
                    {
                      text: "Print designs",
                      link: "/wilcom-docs/Summary/summary_-_designs/Print_designs",
                    },
                    {
                      text: "Output designs",
                      link: "/wilcom-docs/Summary/summary_-_designs/Output_designs",
                    },
                  ],
                },
                {
                  text: "Embroidery clipart",
                  link: "/wilcom-docs/Summary/summary_-_designs/Embroidery_clipart",
                },
                {
                  text: "Design information",
                  link: "/wilcom-docs/Summary/summary_-_designs/Design_information",
                  items: [
                    {
                      text: "Design information > Summary",
                      link: "/wilcom-docs/Summary/summary_-_designs/Design_information_Summary",
                    },
                    {
                      text: "Design information > Design",
                      link: "/wilcom-docs/Summary/summary_-_designs/Design_information_Design",
                    },
                    {
                      text: "Design information > Order",
                      link: "/wilcom-docs/Summary/summary_-_designs/Design_information_Order",
                    },
                    {
                      text: "Design information > Thread colors",
                      link: "/wilcom-docs/Summary/summary_-_designs/Design_information_Thread_colors",
                    },
                    {
                      text: "Design information > Stitching",
                      link: "/wilcom-docs/Summary/summary_-_designs/Design_information_Stitching",
                    },
                    {
                      text: "Design information > Runtime",
                      link: "/wilcom-docs/Summary/summary_-_designs/Design_information_Runtime",
                    },
                    {
                      text: "Thread length calculation",
                      link: "/wilcom-docs/Summary/summary_-_designs/Thread_length_calculation",
                    },
                  ],
                },
                {
                  text: "Auto fabrics",
                  link: "/wilcom-docs/Summary/summary_-_designs/Auto_fabrics",
                  items: [
                    {
                      text: "Activate auto fabric",
                      link: "/wilcom-docs/Summary/summary_-_designs/Activate_auto_fabric",
                    },
                    {
                      text: "Create auto fabrics",
                      link: "/wilcom-docs/Summary/summary_-_designs/Create_auto_fabrics",
                    },
                  ],
                },
                {
                  text: "Color palette",
                  link: "/wilcom-docs/Summary/summary_-_designs/Color_palette",
                  items: [
                    {
                      text: "Edit thread colors",
                      link: "/wilcom-docs/Summary/summary_-_designs/Edit_thread_colors",
                    },
                    {
                      text: "Select thread colors",
                      link: "/wilcom-docs/Summary/summary_-_designs/Select_thread_colors",
                    },
                    {
                      text: "Split color blocks",
                      link: "/wilcom-docs/Summary/summary_-_designs/Split_color_blocks",
                    },
                    {
                      text: "Change color schemes",
                      link: "/wilcom-docs/Summary/summary_-_designs/Change_color_schemes",
                    },
                    {
                      text: "Assign thread colors",
                      link: "/wilcom-docs/Summary/summary_-_designs/Assign_thread_colors",
                    },
                    {
                      text: "Set color",
                      link: "/wilcom-docs/Summary/summary_-_designs/Set_color",
                    },
                  ],
                },
                {
                  text: "Colorways & threads",
                  link: "/wilcom-docs/Summary/summary_-_designs/Colorways_threads",
                  items: [
                    {
                      text: "Colorways",
                      link: "/wilcom-docs/Summary/summary_-_designs/Colorways",
                    },
                    {
                      text: "Change colorways",
                      link: "/wilcom-docs/Summary/summary_-_designs/Change_colorways",
                    },
                    {
                      text: "Create thread charts",
                      link: "/wilcom-docs/Summary/summary_-_designs/Create_thread_charts",
                    },
                    {
                      text: "Backgrounds & display colors",
                      link: "/wilcom-docs/Summary/summary_-_designs/Backgrounds_display_colors",
                    },
                    {
                      text: "Visualize products",
                      link: "/wilcom-docs/Summary/summary_-_designs/Visualize_products",
                    },
                  ],
                },
                {
                  text: "Machine formats",
                  link: "/wilcom-docs/Summary/summary_-_designs/Machine_formats",
                },
                {
                  text: "Design reading & writing",
                  link: "/wilcom-docs/Summary/summary_-_designs/Design_reading_writing",
                  items: [
                    {
                      text: "Open designs",
                      link: "/wilcom-docs/Summary/summary_-_designs/Open_designs",
                    },
                    {
                      text: "Open options",
                      link: "/wilcom-docs/Summary/summary_-_designs/Open_options",
                    },
                    {
                      text: "Save design files",
                      link: "/wilcom-docs/Summary/summary_-_designs/Save_design_files",
                    },
                    {
                      text: "Export machine files",
                      link: "/wilcom-docs/Summary/summary_-_designs/Export_machine_files",
                    },
                    {
                      text: "Melco CND files",
                      link: "/wilcom-docs/Summary/summary_-_designs/Melco_CND_files",
                    },
                    {
                      text: "Export multi-decoration files",
                      link: "/wilcom-docs/Summary/summary_-_designs/Export_multi-decoration_files",
                    },
                    {
                      text: "Embroidery disks",
                      link: "/wilcom-docs/Summary/summary_-_designs/Embroidery_disks",
                    },
                    {
                      text: "Revert to factory settings",
                      link: "/wilcom-docs/Summary/summary_-_designs/Revert_to_factory_settings",
                    },
                  ],
                },
                {
                  text: "Design output",
                  link: "/wilcom-docs/Summary/summary_-_designs/Design_output",
                  items: [
                    {
                      text: "Send designs to Connection Manager",
                      link: "/wilcom-docs/Summary/summary_-_designs/Send_designs_to_Connection_Manager",
                    },
                    {
                      text: "Send designs to EmbroideryConnect",
                      link: "/wilcom-docs/Summary/summary_-_designs/Send_designs_to_EmbroideryConnect",
                    },
                    {
                      text: "Send designs to Stitch Manager",
                      link: "/wilcom-docs/Summary/summary_-_designs/Send_designs_to_Stitch_Manager",
                    },
                    {
                      text: "Send designs to Machine Manager",
                      link: "/wilcom-docs/Summary/summary_-_designs/Send_designs_to_Machine_Manager",
                    },
                    {
                      text: "Capture design bitmap",
                      link: "/wilcom-docs/Summary/summary_-_designs/Capture_design_bitmap",
                    },
                    {
                      text: "Capture virtual decoration bitmap",
                      link: "/wilcom-docs/Summary/summary_-_designs/Capture_virtual_decoration_bitmap",
                    },
                  ],
                },
                {
                  text: "Design reports",
                  link: "/wilcom-docs/Summary/summary_-_designs/Design_reports",
                },
                {
                  text: "Hoops",
                  link: "/wilcom-docs/Summary/summary_-_designs/Hoops",
                  items: [
                    {
                      text: "Auto start & end points",
                      link: "/wilcom-docs/Summary/summary_-_designs/Auto_start_end_points",
                    },
                    {
                      text: "Display hoops",
                      link: "/wilcom-docs/Summary/summary_-_designs/Display_hoops",
                    },
                    {
                      text: "Hoop setup",
                      link: "/wilcom-docs/Summary/summary_-_designs/Hoop_setup",
                    },
                    {
                      text: "Create hoop",
                      link: "/wilcom-docs/Summary/summary_-_designs/Create_hoop",
                    },
                  ],
                },
                {
                  text: "Hardware setup",
                  link: "/wilcom-docs/Summary/summary_-_designs/Hardware_setup",
                  items: [
                    {
                      text: "Hardware setup",
                      link: "/wilcom-docs/Summary/summary_-_designs/Hardware_setup1",
                    },
                    {
                      text: "Digitizer setup",
                      link: "/wilcom-docs/Summary/summary_-_designs/Digitizer_setup",
                    },
                    {
                      text: "Embroidery machine connection",
                      link: "/wilcom-docs/Summary/summary_-_designs/Embroidery_machine_connection",
                    },
                    {
                      text: "Machine runtime setup",
                      link: "/wilcom-docs/Summary/summary_-_designs/Machine_runtime_setup",
                    },
                    {
                      text: "Screen calibration",
                      link: "/wilcom-docs/Summary/summary_-_designs/Screen_calibration",
                    },
                    {
                      text: "Select scanner",
                      link: "/wilcom-docs/Summary/summary_-_designs/Select_scanner",
                    },
                    {
                      text: "Serial port setup",
                      link: "/wilcom-docs/Summary/summary_-_designs/Serial_port_setup",
                    },
                    {
                      text: "Tablet setup",
                      link: "/wilcom-docs/Summary/summary_-_designs/Tablet_setup",
                    },
                  ],
                },
                {
                  text: "System preferences",
                  link: "/wilcom-docs/Summary/summary_-_designs/System_preferences",
                  items: [
                    {
                      text: "General options",
                      link: "/wilcom-docs/Summary/summary_-_designs/General_options",
                    },
                    {
                      text: "Grid & guide options",
                      link: "/wilcom-docs/Summary/summary_-_designs/Grid_guide_options",
                    },
                    {
                      text: "Edit options",
                      link: "/wilcom-docs/Summary/summary_-_designs/Edit_options",
                    },
                    {
                      text: "Export options",
                      link: "/wilcom-docs/Summary/summary_-_designs/Export_options",
                    },
                    {
                      text: "Reshape options",
                      link: "/wilcom-docs/Summary/summary_-_designs/Reshape_options",
                    },
                    {
                      text: "Scrolling options",
                      link: "/wilcom-docs/Summary/summary_-_designs/Scrolling_options",
                    },
                    {
                      text: "Design viewing options",
                      link: "/wilcom-docs/Summary/summary_-_designs/Design_viewing_options",
                    },
                    {
                      text: "Graphics viewing options",
                      link: "/wilcom-docs/Summary/summary_-_designs/Graphics_viewing_options",
                    },
                    {
                      text: "Warning options",
                      link: "/wilcom-docs/Summary/summary_-_designs/Warning_options",
                    },
                    {
                      text: "Guide position",
                      link: "/wilcom-docs/Summary/summary_-_designs/Guide_position",
                    },
                    {
                      text: "Security device",
                      link: "/wilcom-docs/Summary/summary_-_designs/Security_device",
                    },
                  ],
                },
              ],
            },
            {
              text: "Design Creation",
              link: "/wilcom-docs/Summary/summary_-_create/Design_Creation",
              items: [
                {
                  text: "Standard tools",
                  link: "/wilcom-docs/Summary/summary_-_create/Standard_tools",
                  items: [
                    {
                      text: "Create new designs",
                      link: "/wilcom-docs/Summary/summary_-_create/Create_new_designs",
                    },
                    {
                      text: "Import embroidery",
                      link: "/wilcom-docs/Summary/summary_-_create/Import_embroidery",
                    },
                  ],
                },
                {
                  text: "Graphics handling",
                  link: "/wilcom-docs/Summary/summary_-_create/Graphics_handling",
                  items: [
                    {
                      text: "Switch design windows",
                      link: "/wilcom-docs/Summary/summary_-_create/Switch_design_windows",
                    },
                    {
                      text: "Import graphics",
                      link: "/wilcom-docs/Summary/summary_-_create/Import_graphics",
                    },
                    {
                      text: "Bitmap properties",
                      link: "/wilcom-docs/Summary/summary_-_create/Bitmap_properties",
                    },
                    {
                      text: "Prepare artwork",
                      link: "/wilcom-docs/Summary/summary_-_create/Prepare_artwork",
                    },
                    {
                      text: "Match bitmap colors",
                      link: "/wilcom-docs/Summary/summary_-_create/Match_bitmap_colors",
                    },
                    {
                      text: "Crop bitmap images",
                      link: "/wilcom-docs/Summary/summary_-_create/Crop_bitmap_images",
                    },
                    {
                      text: "Create vector shapes",
                      link: "/wilcom-docs/Summary/summary_-_create/Create_vector_shapes",
                    },
                  ],
                },
                {
                  text: "Input methods",
                  link: "/wilcom-docs/Summary/summary_-_create/Input_methods",
                  items: [
                    {
                      text: "Digitize outlines & details",
                      link: "/wilcom-docs/Summary/summary_-_create/Digitize_outlines_details",
                    },
                    {
                      text: "Digitize columns of turning stitches",
                      link: "/wilcom-docs/Summary/summary_-_create/Digitize_columns_of_turning_stitches",
                    },
                    {
                      text: "Create columns & borders",
                      link: "/wilcom-docs/Summary/summary_-_create/Create_columns_borders",
                    },
                    {
                      text: "Digitize open & closed shapes",
                      link: "/wilcom-docs/Summary/summary_-_create/Digitize_open_closed_shapes",
                    },
                    {
                      text: "Digitize free shapes",
                      link: "/wilcom-docs/Summary/summary_-_create/Digitize_free_shapes",
                    },
                    {
                      text: "Digitize regular shapes",
                      link: "/wilcom-docs/Summary/summary_-_create/Digitize_regular_shapes",
                    },
                    {
                      text: "Create freehand shapes",
                      link: "/wilcom-docs/Summary/summary_-_create/Create_freehand_shapes",
                    },
                  ],
                },
                {
                  text: "Stitch types",
                  link: "/wilcom-docs/Summary/summary_-_create/Stitch_types",
                  items: [
                    {
                      text: "Simple runs",
                      link: "/wilcom-docs/Summary/summary_-_create/Simple_runs",
                    },
                    {
                      text: "Decorative outlines",
                      link: "/wilcom-docs/Summary/summary_-_create/Decorative_outlines",
                    },
                    {
                      text: "Satin stitching",
                      link: "/wilcom-docs/Summary/summary_-_create/Satin_stitching",
                    },
                    {
                      text: "Tatami stitching",
                      link: "/wilcom-docs/Summary/summary_-_create/Tatami_stitching",
                    },
                    {
                      text: "Open stitching",
                      link: "/wilcom-docs/Summary/summary_-_create/Open_stitching",
                    },
                    {
                      text: "Chenille-style patterns",
                      link: "/wilcom-docs/Summary/summary_-_create/Chenille-style_patterns",
                    },
                    {
                      text: "String stitching",
                      link: "/wilcom-docs/Summary/summary_-_create/String_stitching",
                    },
                    {
                      text: "Patterned stitching",
                      link: "/wilcom-docs/Summary/summary_-_create/Patterned_stitching",
                    },
                    {
                      text: "Contoured fills",
                      link: "/wilcom-docs/Summary/summary_-_create/Contoured_fills",
                    },
                    {
                      text: "Spiral fills",
                      link: "/wilcom-docs/Summary/summary_-_create/Spiral_fills",
                    },
                    {
                      text: "Maze fills",
                      link: "/wilcom-docs/Summary/summary_-_create/Maze_fills",
                    },
                    {
                      text: "Offset fills",
                      link: "/wilcom-docs/Summary/summary_-_create/Offset_fills",
                    },
                    {
                      text: "Cross stitch fills",
                      link: "/wilcom-docs/Summary/summary_-_create/Cross_stitch_fills",
                    },
                    {
                      text: "Stipple fills",
                      link: "/wilcom-docs/Summary/summary_-_create/Stipple_fills",
                    },
                  ],
                },
                {
                  text: "Motifs",
                  link: "/wilcom-docs/Summary/summary_-_create/Motifs",
                  items: [
                    {
                      text: "Motif fills & borders",
                      link: "/wilcom-docs/Summary/summary_-_create/Motif_fills_borders",
                    },
                    {
                      text: "Graded motif columns",
                      link: "/wilcom-docs/Summary/summary_-_create/Graded_motif_columns",
                    },
                    {
                      text: "3D effects with motif fills",
                      link: "/wilcom-docs/Summary/summary_-_create/3D_effects_with_motif_fills",
                    },
                    {
                      text: "Place individual motifs",
                      link: "/wilcom-docs/Summary/summary_-_create/Place_individual_motifs",
                    },
                    {
                      text: "Create motifs",
                      link: "/wilcom-docs/Summary/summary_-_create/Create_motifs",
                    },
                  ],
                },
                {
                  text: "Stitch effects",
                  link: "/wilcom-docs/Summary/summary_-_create/Stitch_effects",
                  items: [
                    {
                      text: "Automatic underlay",
                      link: "/wilcom-docs/Summary/summary_-_create/Automatic_underlay",
                    },
                    {
                      text: "Automatic pull compensation",
                      link: "/wilcom-docs/Summary/summary_-_create/Automatic_pull_compensation",
                    },
                    {
                      text: "Long stitches with Auto Jump",
                      link: "/wilcom-docs/Summary/summary_-_create/Long_stitches_with_Auto_Jump",
                    },
                    {
                      text: "Fractional spacing",
                      link: "/wilcom-docs/Summary/summary_-_create/Fractional_spacing",
                    },
                    {
                      text: "Stitch shortening",
                      link: "/wilcom-docs/Summary/summary_-_create/Stitch_shortening",
                    },
                    {
                      text: "Smart corners",
                      link: "/wilcom-docs/Summary/summary_-_create/Smart_corners",
                    },
                    {
                      text: "Jagged edges",
                      link: "/wilcom-docs/Summary/summary_-_create/Jagged_edges",
                    },
                    {
                      text: "Open stitching with trapunto",
                      link: "/wilcom-docs/Summary/summary_-_create/Open_stitching_with_trapunto",
                    },
                    {
                      text: "User-defined splits",
                      link: "/wilcom-docs/Summary/summary_-_create/User-defined_splits",
                    },
                    {
                      text: "Accordion spacing",
                      link: "/wilcom-docs/Summary/summary_-_create/Accordion_spacing",
                    },
                    {
                      text: "Color blends",
                      link: "/wilcom-docs/Summary/summary_-_create/Color_blends",
                    },
                    {
                      text: "Flexi-splits",
                      link: "/wilcom-docs/Summary/summary_-_create/Flexi-splits",
                    },
                    {
                      text: "Curved fills",
                      link: "/wilcom-docs/Summary/summary_-_create/Curved_fills",
                    },
                    {
                      text: "Hand Stitch",
                      link: "/wilcom-docs/Summary/summary_-_create/Hand_Stitch",
                    },
                    {
                      text: "Radial fills",
                      link: "/wilcom-docs/Summary/summary_-_create/Radial_fills",
                    },
                  ],
                },
                {
                  text: "Carving stamps",
                  link: "/wilcom-docs/Summary/summary_-_create/Carving_stamps",
                  items: [
                    {
                      text: "Apply predefined patterns",
                      link: "/wilcom-docs/Summary/summary_-_create/Apply_predefined_patterns",
                    },
                    {
                      text: "Carving stamp > use patterns",
                      link: "/wilcom-docs/Summary/summary_-_create/Carving_stamp_use_patterns",
                    },
                    {
                      text: "Carving stamp > use objects",
                      link: "/wilcom-docs/Summary/summary_-_create/Carving_stamp_use_objects",
                    },
                    {
                      text: "Carving stamp > digitize",
                      link: "/wilcom-docs/Summary/summary_-_create/Carving_stamp_digitize",
                    },
                    {
                      text: "Carving stamp > appearance",
                      link: "/wilcom-docs/Summary/summary_-_create/Carving_stamp_appearance",
                    },
                  ],
                },
                {
                  text: "Automatic digitizing",
                  link: "/wilcom-docs/Summary/summary_-_create/Automatic_digitizing",
                  items: [
                    {
                      text: "Convert vector & embroidery objects",
                      link: "/wilcom-docs/Summary/summary_-_create/Convert_vector_embroidery_objects",
                    },
                    {
                      text: "Smart Design",
                      link: "/wilcom-docs/Summary/summary_-_create/Smart_Design",
                    },
                    {
                      text: "Photo Flash",
                      link: "/wilcom-docs/Summary/summary_-_create/Photo_Flash",
                    },
                    {
                      text: "Reef PhotoStitch",
                      link: "/wilcom-docs/Summary/summary_-_create/Reef_PhotoStitch",
                    },
                    {
                      text: "Color PhotoStitch",
                      link: "/wilcom-docs/Summary/summary_-_create/Color_PhotoStitch",
                    },
                    {
                      text: "Create fills with Auto-Digitizing",
                      link: "/wilcom-docs/Summary/summary_-_create/Create_fills_with_Auto-Digitizing",
                    },
                    {
                      text: "Auto-trace bitmap artwork",
                      link: "/wilcom-docs/Summary/summary_-_create/Auto-trace_bitmap_artwork",
                    },
                    {
                      text: "Smooth curves",
                      link: "/wilcom-docs/Summary/summary_-_create/Smooth_curves",
                    },
                  ],
                },
              ],
            },
            {
              text: "Design Editing",
              link: "/wilcom-docs/Summary/summary_-_edit/Design_Editing",
              items: [
                {
                  text: "Object Properties",
                  link: "/wilcom-docs/Summary/summary_-_edit/Object_Properties",
                  items: [
                    {
                      text: "Object properties docker",
                      link: "/wilcom-docs/Summary/summary_-_edit/Object_properties_docker",
                    },
                    {
                      text: "Copy properties",
                      link: "/wilcom-docs/Summary/summary_-_edit/Copy_properties",
                    },
                  ],
                },
                {
                  text: "Styles",
                  link: "/wilcom-docs/Summary/summary_-_edit/Styles",
                  items: [
                    {
                      text: "Apply styles",
                      link: "/wilcom-docs/Summary/summary_-_edit/Apply_styles",
                    },
                    {
                      text: "Create styles",
                      link: "/wilcom-docs/Summary/summary_-_edit/Create_styles",
                    },
                    {
                      text: "Add to favorites",
                      link: "/wilcom-docs/Summary/summary_-_edit/Add_to_favorites",
                    },
                    {
                      text: "Modify styles",
                      link: "/wilcom-docs/Summary/summary_-_edit/Modify_styles",
                    },
                  ],
                },
                {
                  text: "View designs",
                  link: "/wilcom-docs/Summary/summary_-_edit/View_designs",
                  items: [
                    {
                      text: "Set measurement units",
                      link: "/wilcom-docs/Summary/summary_-_edit/Set_measurement_units",
                    },
                    {
                      text: "Display grids, rulers & guides",
                      link: "/wilcom-docs/Summary/summary_-_edit/Display_grids_rulers_guides",
                    },
                    {
                      text: "View embroidery components",
                      link: "/wilcom-docs/Summary/summary_-_edit/View_embroidery_components",
                    },
                    {
                      text: "View graphical components",
                      link: "/wilcom-docs/Summary/summary_-_edit/View_graphical_components",
                    },
                    {
                      text: "Zoom & pan designs",
                      link: "/wilcom-docs/Summary/summary_-_edit/Zoom_pan_designs",
                    },
                    {
                      text: "Overview window",
                      link: "/wilcom-docs/Summary/summary_-_edit/Overview_window",
                    },
                    {
                      text: "View designs with the Color-Object List",
                      link: "/wilcom-docs/Summary/summary_-_edit/View_designs_with_the_Color-Object_List",
                    },
                    {
                      text: "View designs by color",
                      link: "/wilcom-docs/Summary/summary_-_edit/View_designs_by_color",
                    },
                    {
                      text: "View design repeats",
                      link: "/wilcom-docs/Summary/summary_-_edit/View_design_repeats",
                    },
                  ],
                },
                {
                  text: "Selection tools",
                  link: "/wilcom-docs/Summary/summary_-_edit/Selection_tools",
                  items: [
                    {
                      text: "Select object",
                      link: "/wilcom-docs/Summary/summary_-_edit/Select_object",
                    },
                    {
                      text: "Select by color",
                      link: "/wilcom-docs/Summary/summary_-_edit/Select_by_color",
                    },
                    {
                      text: "Select by stitch type",
                      link: "/wilcom-docs/Summary/summary_-_edit/Select_by_stitch_type",
                    },
                  ],
                },
                {
                  text: "Editing tools",
                  link: "/wilcom-docs/Summary/summary_-_edit/Editing_tools",
                  items: [
                    {
                      text: "Copy & paste objects",
                      link: "/wilcom-docs/Summary/summary_-_edit/Copy_paste_objects",
                    },
                    {
                      text: "Undo & redo functions",
                      link: "/wilcom-docs/Summary/summary_-_edit/Undo_redo_functions",
                    },
                    {
                      text: "Break apart composite objects",
                      link: "/wilcom-docs/Summary/summary_-_edit/Break_apart_composite_objects",
                    },
                    {
                      text: "Cut shapes",
                      link: "/wilcom-docs/Summary/summary_-_edit/Cut_shapes",
                    },
                    {
                      text: "Stitch angle tools",
                      link: "/wilcom-docs/Summary/summary_-_edit/Stitch_angle_tools",
                    },
                    {
                      text: "Reshape tools",
                      link: "/wilcom-docs/Summary/summary_-_edit/Reshape_tools",
                    },
                  ],
                },
                {
                  text: "Sequence tools",
                  link: "/wilcom-docs/Summary/summary_-_edit/Sequence_tools",
                  items: [
                    {
                      text: "Sequence selected objects",
                      link: "/wilcom-docs/Summary/summary_-_edit/Sequence_selected_objects",
                    },
                    {
                      text: "Sequence by color block",
                      link: "/wilcom-docs/Summary/summary_-_edit/Sequence_by_color_block",
                    },
                    {
                      text: "Sequence by selection order",
                      link: "/wilcom-docs/Summary/summary_-_edit/Sequence_by_selection_order",
                    },
                    {
                      text: "Sequence by number",
                      link: "/wilcom-docs/Summary/summary_-_edit/Sequence_by_number",
                    },
                  ],
                },
                {
                  text: "Transformation tools",
                  link: "/wilcom-docs/Summary/summary_-_edit/Transformation_tools",
                  items: [
                    {
                      text: "Flip objects horizontally & vertically",
                      link: "/wilcom-docs/Summary/summary_-_edit/Flip_objects_horizontally_vertically",
                    },
                    {
                      text: "Rotate objects numerically",
                      link: "/wilcom-docs/Summary/summary_-_edit/Rotate_objects_numerically",
                    },
                    {
                      text: "Skew objects",
                      link: "/wilcom-docs/Summary/summary_-_edit/Skew_objects",
                    },
                    {
                      text: "Transform by reference line",
                      link: "/wilcom-docs/Summary/summary_-_edit/Transform_by_reference_line",
                    },
                  ],
                },
                {
                  text: "Arrange tools",
                  link: "/wilcom-docs/Summary/summary_-_edit/Arrange_tools",
                  items: [
                    {
                      text: "Group & lock objects",
                      link: "/wilcom-docs/Summary/summary_-_edit/Group_lock_objects",
                    },
                    {
                      text: "Align objects",
                      link: "/wilcom-docs/Summary/summary_-_edit/Align_objects",
                    },
                    {
                      text: "Distribute objects",
                      link: "/wilcom-docs/Summary/summary_-_edit/Distribute_objects",
                    },
                    {
                      text: "Make objects same size",
                      link: "/wilcom-docs/Summary/summary_-_edit/Make_objects_same_size",
                    },
                  ],
                },
                {
                  text: "Mirror-merge tools",
                  link: "/wilcom-docs/Summary/summary_-_edit/Mirror-merge_tools",
                  items: [
                    {
                      text: "Mirror selections horizontally & vertically",
                      link: "/wilcom-docs/Summary/summary_-_edit/Mirror_selections_horizontally_vertically",
                    },
                    {
                      text: "Create design arrays",
                      link: "/wilcom-docs/Summary/summary_-_edit/Create_design_arrays",
                    },
                    {
                      text: "Create multiple reflections",
                      link: "/wilcom-docs/Summary/summary_-_edit/Create_multiple_reflections",
                    },
                    {
                      text: "Create wreaths",
                      link: "/wilcom-docs/Summary/summary_-_edit/Create_wreaths",
                    },
                  ],
                },
                {
                  text: "Shaping tools",
                  link: "/wilcom-docs/Summary/summary_-_edit/Shaping_tools",
                  items: [
                    {
                      text: "Merge vector & embroidery objects",
                      link: "/wilcom-docs/Summary/summary_-_edit/Merge_vector_embroidery_objects",
                    },
                    {
                      text: "Trim vector & embroidery objects",
                      link: "/wilcom-docs/Summary/summary_-_edit/Trim_vector_embroidery_objects",
                    },
                    {
                      text: "Split vector & embroidery objects",
                      link: "/wilcom-docs/Summary/summary_-_edit/Split_vector_embroidery_objects",
                    },
                    {
                      text: "Preserve original objects",
                      link: "/wilcom-docs/Summary/summary_-_edit/Preserve_original_objects",
                    },
                  ],
                },
                {
                  text: "Envelope tools",
                  link: "/wilcom-docs/Summary/summary_-_edit/Envelope_tools",
                },
                {
                  text: "Generated outlines & fills",
                  link: "/wilcom-docs/Summary/summary_-_edit/Generated_outlines_fills",
                  items: [
                    {
                      text: "Simple offsets",
                      link: "/wilcom-docs/Summary/summary_-_edit/Simple_offsets",
                    },
                    {
                      text: "Outlines & offsets",
                      link: "/wilcom-docs/Summary/summary_-_edit/Outlines_offsets",
                    },
                    {
                      text: "Parallel offsets",
                      link: "/wilcom-docs/Summary/summary_-_edit/Parallel_offsets",
                    },
                    {
                      text: "Hole tools",
                      link: "/wilcom-docs/Summary/summary_-_edit/Hole_tools",
                    },
                    {
                      text: "Add design borders",
                      link: "/wilcom-docs/Summary/summary_-_edit/Add_design_borders",
                    },
                  ],
                },
                {
                  text: "Connectors",
                  link: "/wilcom-docs/Summary/summary_-_edit/Connectors",
                  items: [
                    {
                      text: "Object properties > Connectors",
                      link: "/wilcom-docs/Summary/summary_-_edit/Object_properties_Connectors",
                    },
                    {
                      text: "Object properties > Travel runs",
                      link: "/wilcom-docs/Summary/summary_-_edit/Object_properties_Travel_runs",
                    },
                    {
                      text: "Apply closest join",
                      link: "/wilcom-docs/Summary/summary_-_edit/Apply_closest_join",
                    },
                    {
                      text: "Apply automatic branching",
                      link: "/wilcom-docs/Summary/summary_-_edit/Apply_automatic_branching",
                    },
                  ],
                },
                {
                  text: "Stitch editing",
                  link: "/wilcom-docs/Summary/summary_-_edit/Stitch_editing",
                  items: [
                    {
                      text: "Manual stitches",
                      link: "/wilcom-docs/Summary/summary_-_edit/Manual_stitches",
                    },
                    {
                      text: "Select & deselect stitches",
                      link: "/wilcom-docs/Summary/summary_-_edit/Select_deselect_stitches",
                    },
                    {
                      text: "Keep or omit last stitches",
                      link: "/wilcom-docs/Summary/summary_-_edit/Keep_or_omit_last_stitches",
                    },
                    {
                      text: "Select stitches while traveling",
                      link: "/wilcom-docs/Summary/summary_-_edit/Select_stitches_while_traveling",
                    },
                    {
                      text: "Generate stitches",
                      link: "/wilcom-docs/Summary/summary_-_edit/Generate_stitches",
                    },
                    {
                      text: "Split objects",
                      link: "/wilcom-docs/Summary/summary_-_edit/Split_objects",
                    },
                    {
                      text: "Adjust stitch densities",
                      link: "/wilcom-docs/Summary/summary_-_edit/Adjust_stitch_densities",
                    },
                    {
                      text: "Stitch list",
                      link: "/wilcom-docs/Summary/summary_-_edit/Stitch_list",
                    },
                    {
                      text: "Remove small stitches",
                      link: "/wilcom-docs/Summary/summary_-_edit/Remove_small_stitches",
                    },
                  ],
                },
                {
                  text: "Machine functions",
                  link: "/wilcom-docs/Summary/summary_-_edit/Machine_functions",
                  items: [
                    {
                      text: "Add jumps with penetrations off",
                      link: "/wilcom-docs/Summary/summary_-_edit/Add_jumps_with_penetrations_off",
                    },
                    {
                      text: "Add trims & tie-offs",
                      link: "/wilcom-docs/Summary/summary_-_edit/Add_trims_tie-offs",
                    },
                    {
                      text: "Add empty stitches & jumps",
                      link: "/wilcom-docs/Summary/summary_-_edit/Add_empty_stitches_jumps",
                    },
                    {
                      text: "Insert machine functions manually",
                      link: "/wilcom-docs/Summary/summary_-_edit/Insert_machine_functions_manually",
                    },
                    {
                      text: "Edit machine functions manually",
                      link: "/wilcom-docs/Summary/summary_-_edit/Edit_machine_functions_manually",
                    },
                    {
                      text: "Digitize boring holes",
                      link: "/wilcom-docs/Summary/summary_-_edit/Digitize_boring_holes",
                    },
                  ],
                },
                {
                  text: "Finalize designs",
                  link: "/wilcom-docs/Summary/summary_-_edit/Finalize_designs",
                  items: [
                    {
                      text: "Travel tools",
                      link: "/wilcom-docs/Summary/summary_-_edit/Travel_tools",
                    },
                    {
                      text: "Simulate design stitchouts",
                      link: "/wilcom-docs/Summary/summary_-_edit/Simulate_design_stitchouts",
                    },
                  ],
                },
              ],
            },
            {
              text: "Speciality Features",
              link: "/wilcom-docs/Summary/summary_-_special/Speciality_Features",
              items: [
                {
                  text: "Lettering",
                  link: "/wilcom-docs/Summary/summary_-_special/Lettering",
                  items: [
                    {
                      text: "Create lettering in CorelDRAW Graphics",
                      link: "/wilcom-docs/Summary/summary_-_special/Create_lettering_in_CorelDRAW_Graphics",
                    },
                    {
                      text: "Add embroidery lettering",
                      link: "/wilcom-docs/Summary/summary_-_special/Add_embroidery_lettering",
                    },
                    {
                      text: "Baseline settings",
                      link: "/wilcom-docs/Summary/summary_-_special/Baseline_settings",
                    },
                    {
                      text: "Letter spacing table",
                      link: "/wilcom-docs/Summary/summary_-_special/Letter_spacing_table",
                    },
                    {
                      text: "Letter sequence",
                      link: "/wilcom-docs/Summary/summary_-_special/Letter_sequence",
                    },
                    {
                      text: "Convert TrueType font",
                      link: "/wilcom-docs/Summary/summary_-_special/Convert_TrueType_font",
                    },
                    {
                      text: "Create alphabets",
                      link: "/wilcom-docs/Summary/summary_-_special/Create_alphabets",
                    },
                    {
                      text: "Kerning table",
                      link: "/wilcom-docs/Summary/summary_-_special/Kerning_table",
                    },
                    {
                      text: "Create user-refined letters",
                      link: "/wilcom-docs/Summary/summary_-_special/Create_user-refined_letters",
                    },
                  ],
                },
                {
                  text: "Teamname lettering",
                  link: "/wilcom-docs/Summary/summary_-_special/Teamname_lettering",
                  items: [
                    {
                      text: "Team names",
                      link: "/wilcom-docs/Summary/summary_-_special/Team_names",
                    },
                    {
                      text: "Teamname setup",
                      link: "/wilcom-docs/Summary/summary_-_special/Teamname_setup",
                    },
                    {
                      text: "Teamname matrix",
                      link: "/wilcom-docs/Summary/summary_-_special/Teamname_matrix",
                    },
                    {
                      text: "Teamname save options",
                      link: "/wilcom-docs/Summary/summary_-_special/Teamname_save_options",
                    },
                  ],
                },
                {
                  text: "Monogramming",
                  link: "/wilcom-docs/Summary/summary_-_special/Monogramming",
                },
                {
                  text: "Lettering kiosk",
                  link: "/wilcom-docs/Summary/summary_-_special/Lettering_kiosk",
                },
                {
                  text: "Appliqué",
                  link: "/wilcom-docs/Summary/summary_-_special/Appliqu%C3%A9",
                  items: [
                    {
                      text: "Create appliqué embroidery",
                      link: "/wilcom-docs/Summary/summary_-_special/Create_appliqu%C3%A9_embroidery",
                    },
                    {
                      text: "Convert vector graphics to appliqué",
                      link: "/wilcom-docs/Summary/summary_-_special/Convert_vector_graphics_to_appliqu%C3%A9",
                    },
                    {
                      text: "Remove underlying stitching",
                      link: "/wilcom-docs/Summary/summary_-_special/Remove_underlying_stitching",
                    },
                    {
                      text: "Show appliqué fabric",
                      link: "/wilcom-docs/Summary/summary_-_special/Show_appliqu%C3%A9_fabric",
                    },
                    {
                      text: "Send to appliqué cutter",
                      link: "/wilcom-docs/Summary/summary_-_special/Send_to_appliqu%C3%A9_cutter",
                    },
                  ],
                },
                {
                  text: "Cording",
                  link: "/wilcom-docs/Summary/summary_-_special/Cording",
                },
                {
                  text: "Sequins",
                  link: "/wilcom-docs/Summary/summary_-_special/Sequins",
                  items: [
                    {
                      text: "Set up sequin palettes",
                      link: "/wilcom-docs/Summary/summary_-_special/Set_up_sequin_palettes",
                    },
                    {
                      text: "Manually digitize sequin drops",
                      link: "/wilcom-docs/Summary/summary_-_special/Manually_digitize_sequin_drops",
                    },
                    {
                      text: "Digitize sequin runs",
                      link: "/wilcom-docs/Summary/summary_-_special/Digitize_sequin_runs",
                    },
                    {
                      text: "Digitize sequin fills",
                      link: "/wilcom-docs/Summary/summary_-_special/Digitize_sequin_fills",
                    },
                    {
                      text: "Change sequins & fixing stitches",
                      link: "/wilcom-docs/Summary/summary_-_special/Change_sequins_fixing_stitches",
                    },
                    {
                      text: "Sequin patterns",
                      link: "/wilcom-docs/Summary/summary_-_special/Sequin_patterns",
                    },
                    {
                      text: "Flip sequins",
                      link: "/wilcom-docs/Summary/summary_-_special/Flip_sequins",
                    },
                    {
                      text: "Modify sequin designs",
                      link: "/wilcom-docs/Summary/summary_-_special/Modify_sequin_designs",
                    },
                    {
                      text: "Custom sequins",
                      link: "/wilcom-docs/Summary/summary_-_special/Custom_sequins",
                    },
                    {
                      text: "Insert sequins while traveling",
                      link: "/wilcom-docs/Summary/summary_-_special/Insert_sequins_while_traveling",
                    },
                    {
                      text: "Convert sequin artwork",
                      link: "/wilcom-docs/Summary/summary_-_special/Convert_sequin_artwork",
                    },
                  ],
                },
                {
                  text: "Beading",
                  link: "/wilcom-docs/Summary/summary_-_special/Beading",
                  items: [
                    {
                      text: "Set up bead palette",
                      link: "/wilcom-docs/Summary/summary_-_special/Set_up_bead_palette",
                    },
                    {
                      text: "Digitize bead runs",
                      link: "/wilcom-docs/Summary/summary_-_special/Digitize_bead_runs",
                    },
                    {
                      text: "Edit bead runs",
                      link: "/wilcom-docs/Summary/summary_-_special/Edit_bead_runs",
                    },
                    {
                      text: "Digitize manual bead drops",
                      link: "/wilcom-docs/Summary/summary_-_special/Digitize_manual_bead_drops",
                    },
                    {
                      text: "Encode bead drops on output",
                      link: "/wilcom-docs/Summary/summary_-_special/Encode_bead_drops_on_output",
                    },
                  ],
                },
                {
                  text: "Bling",
                  link: "/wilcom-docs/Summary/summary_-_special/Bling",
                  items: [
                    {
                      text: "Set up bling palettes",
                      link: "/wilcom-docs/Summary/summary_-_special/Set_up_bling_palettes",
                    },
                    {
                      text: "Place individual rhinestones",
                      link: "/wilcom-docs/Summary/summary_-_special/Place_individual_rhinestones",
                    },
                    {
                      text: "Create bling runs",
                      link: "/wilcom-docs/Summary/summary_-_special/Create_bling_runs",
                    },
                    {
                      text: "Create bling fills",
                      link: "/wilcom-docs/Summary/summary_-_special/Create_bling_fills",
                    },
                    {
                      text: "Create bling lettering",
                      link: "/wilcom-docs/Summary/summary_-_special/Create_bling_lettering",
                    },
                    {
                      text: "Edit bling-fill objects",
                      link: "/wilcom-docs/Summary/summary_-_special/Edit_bling-fill_objects",
                    },
                    {
                      text: "Output bling templates",
                      link: "/wilcom-docs/Summary/summary_-_special/Output_bling_templates",
                    },
                    {
                      text: "Output directly to CAMS machine",
                      link: "/wilcom-docs/Summary/summary_-_special/Output_directly_to_CAMS_machine",
                    },
                  ],
                },
                {
                  text: "Chenille",
                  link: "/wilcom-docs/Summary/summary_-_special/Chenille",
                  items: [
                    {
                      text: "Chenille stitch types",
                      link: "/wilcom-docs/Summary/summary_-_special/Chenille_stitch_types",
                    },
                    {
                      text: "Compound chenille",
                      link: "/wilcom-docs/Summary/summary_-_special/Compound_chenille",
                    },
                    {
                      text: "Chenille needle height",
                      link: "/wilcom-docs/Summary/summary_-_special/Chenille_needle_height",
                    },
                    {
                      text: "Chenille stitch patterns",
                      link: "/wilcom-docs/Summary/summary_-_special/Chenille_stitch_patterns",
                    },
                  ],
                },
                {
                  text: "Schiffli",
                  link: "/wilcom-docs/Summary/summary_-_special/Schiffli",
                },
              ],
            },
          ],
          collapsed: true,
        },
      ],
      "/wilcom-videos": [
        {
          text: "Applied Decoration",
          items: [
            {
              text: "Mixed Decoration",
              items: [
                {
                  text: "Boring",
                  link: "/wilcom-videos/Applied/mixed/Boring",
                },
              ],
            },
            {
              text: "Bead Embroidery",
              link: "/wilcom-videos/Applied/beading/Bead_Embroidery",
            },
          ],
        },
        {
          text: "Chenille Embroidery",
          link: "/wilcom-videos/Chenille/PART_Chenille/PART_Chenille",
          items: [
            {
              text: "Chenille Digitizing",
              link: "/wilcom-videos/Chenille/chenille_digitizing/Chenille_Digitizing",
            },
            {
              text: "Chenille Output",
              link: "/wilcom-videos/Chenille/chenille_output/Chenille_Output",
            },
          ],
        },
        {
          text: "Software Summary",
          items: [
            {
              text: "Design Handling",
              items: [
                {
                  text: "Operating modes",
                  link: "/wilcom-videos/Summary/summary_-_designs/Operating_modes",
                },
                {
                  text: "Design management",
                  link: "/wilcom-videos/Summary/summary_-_designs/Design_management",
                  items: [
                    {
                      text: "View designs in network folders",
                      link: "/wilcom-videos/Summary/summary_-_designs/View_designs_in_network_folders",
                    },
                  ],
                },
                {
                  text: "Embroidery clipart",
                  link: "/wilcom-videos/Summary/summary_-_designs/Embroidery_clipart",
                },
                {
                  text: "Design information",
                  items: [
                    {
                      text: "Design information > Order",
                      link: "/wilcom-videos/Summary/summary_-_designs/Design_information_Order",
                    },
                  ],
                },
                {
                  text: "Auto fabrics",
                  link: "/wilcom-videos/Summary/summary_-_designs/Auto_fabrics",
                },
                {
                  text: "Color palette",
                  items: [
                    {
                      text: "Split color blocks",
                      link: "/wilcom-videos/Summary/summary_-_designs/Split_color_blocks",
                    },
                    {
                      text: "Change color schemes",
                      link: "/wilcom-videos/Summary/summary_-_designs/Change_color_schemes",
                    },
                    {
                      text: "Assign thread colors",
                      link: "/wilcom-videos/Summary/summary_-_designs/Assign_thread_colors",
                    },
                  ],
                },
                {
                  text: "Colorways & threads",
                  link: "/wilcom-videos/Summary/summary_-_designs/Colorways_threads",
                  items: [
                    {
                      text: "Backgrounds & display colors",
                      link: "/wilcom-videos/Summary/summary_-_designs/Backgrounds_display_colors",
                    },
                    {
                      text: "Visualize products",
                      link: "/wilcom-videos/Summary/summary_-_designs/Visualize_products",
                    },
                  ],
                },
                {
                  text: "Design reading & writing",
                  link: "/wilcom-videos/Summary/summary_-_designs/Design_reading_writing",
                  items: [
                    {
                      text: "Export machine files",
                      link: "/wilcom-videos/Summary/summary_-_designs/Export_machine_files",
                    },
                  ],
                },
                {
                  text: "Design output",
                  link: "/wilcom-videos/Summary/summary_-_designs/Design_output",
                  items: [
                    {
                      text: "Send designs to EmbroideryConnect",
                      link: "/wilcom-videos/Summary/summary_-_designs/Send_designs_to_EmbroideryConnect",
                    },
                    {
                      text: "Capture virtual decoration bitmap",
                      link: "/wilcom-videos/Summary/summary_-_designs/Capture_virtual_decoration_bitmap",
                    },
                  ],
                },
                {
                  text: "Design reports",
                  link: "/wilcom-videos/Summary/summary_-_designs/Design_reports",
                },
                {
                  text: "Hoops",
                  items: [
                    {
                      text: "Auto start & end points",
                      link: "/wilcom-videos/Summary/summary_-_designs/Auto_start_end_points",
                    },
                  ],
                },
                {
                  text: "System preferences",
                  items: [
                    {
                      text: "Edit options",
                      link: "/wilcom-videos/Summary/summary_-_designs/Edit_options",
                    },
                  ],
                },
              ],
            },
            {
              text: "Design Creation",
              items: [
                {
                  text: "Graphics handling",
                  link: "/wilcom-videos/Summary/summary_-_create/Graphics_handling",
                  items: [
                    {
                      text: "Import graphics",
                      link: "/wilcom-videos/Summary/summary_-_create/Import_graphics",
                    },
                    {
                      text: "Prepare artwork",
                      link: "/wilcom-videos/Summary/summary_-_create/Prepare_artwork",
                    },
                  ],
                },
                {
                  text: "Input methods",
                  link: "/wilcom-videos/Summary/summary_-_create/Input_methods",
                  items: [
                    {
                      text: "Digitize columns of turning stitches",
                      link: "/wilcom-videos/Summary/summary_-_create/Digitize_columns_of_turning_stitches",
                    },
                    {
                      text: "Digitize open & closed shapes",
                      link: "/wilcom-videos/Summary/summary_-_create/Digitize_open_closed_shapes",
                    },
                    {
                      text: "Digitize free shapes",
                      link: "/wilcom-videos/Summary/summary_-_create/Digitize_free_shapes",
                    },
                    {
                      text: "Digitize regular shapes",
                      link: "/wilcom-videos/Summary/summary_-_create/Digitize_regular_shapes",
                    },
                    {
                      text: "Create freehand shapes",
                      link: "/wilcom-videos/Summary/summary_-_create/Create_freehand_shapes",
                    },
                  ],
                },
                {
                  text: "Stitch types",
                  link: "/wilcom-videos/Summary/summary_-_create/Stitch_types",
                  items: [
                    {
                      text: "Simple runs",
                      link: "/wilcom-videos/Summary/summary_-_create/Simple_runs",
                    },
                    {
                      text: "Satin stitching",
                      link: "/wilcom-videos/Summary/summary_-_create/Satin_stitching",
                    },
                    {
                      text: "Tatami stitching",
                      link: "/wilcom-videos/Summary/summary_-_create/Tatami_stitching",
                    },
                    {
                      text: "String stitching",
                      link: "/wilcom-videos/Summary/summary_-_create/String_stitching",
                    },
                    {
                      text: "Contoured fills",
                      link: "/wilcom-videos/Summary/summary_-_create/Contoured_fills",
                    },
                    {
                      text: "Spiral fills",
                      link: "/wilcom-videos/Summary/summary_-_create/Spiral_fills",
                    },
                    {
                      text: "Maze fills",
                      link: "/wilcom-videos/Summary/summary_-_create/Maze_fills",
                    },
                  ],
                },
                {
                  text: "Motifs",
                  link: "/wilcom-videos/Summary/summary_-_create/Motifs",
                  items: [
                    {
                      text: "Motif fills & borders",
                      link: "/wilcom-videos/Summary/summary_-_create/Motif_fills_borders",
                    },
                    {
                      text: "Graded motif columns",
                      link: "/wilcom-videos/Summary/summary_-_create/Graded_motif_columns",
                    },
                    {
                      text: "Create motifs",
                      link: "/wilcom-videos/Summary/summary_-_create/Create_motifs",
                    },
                  ],
                },
                {
                  text: "Stitch effects",
                  items: [
                    {
                      text: "Stitch shortening",
                      link: "/wilcom-videos/Summary/summary_-_create/Stitch_shortening",
                    },
                    {
                      text: "User-defined splits",
                      link: "/wilcom-videos/Summary/summary_-_create/User-defined_splits",
                    },
                    {
                      text: "Color blends",
                      link: "/wilcom-videos/Summary/summary_-_create/Color_blends",
                    },
                    {
                      text: "Curved fills",
                      link: "/wilcom-videos/Summary/summary_-_create/Curved_fills",
                    },
                    {
                      text: "Hand Stitch",
                      link: "/wilcom-videos/Summary/summary_-_create/Hand_Stitch",
                    },
                  ],
                },
                {
                  text: "Carving stamps",
                  link: "/wilcom-videos/Summary/summary_-_create/Carving_stamps",
                },
                {
                  text: "Automatic digitizing",
                  items: [
                    {
                      text: "Convert vector & embroidery objects",
                      link: "/wilcom-videos/Summary/summary_-_create/Convert_vector_embroidery_objects",
                    },
                    {
                      text: "Smart Design",
                      link: "/wilcom-videos/Summary/summary_-_create/Smart_Design",
                    },
                    {
                      text: "Reef PhotoStitch",
                      link: "/wilcom-videos/Summary/summary_-_create/Reef_PhotoStitch",
                    },
                    {
                      text: "Color PhotoStitch",
                      link: "/wilcom-videos/Summary/summary_-_create/Color_PhotoStitch",
                    },
                  ],
                },
              ],
            },
            {
              text: "Design Editing",
              items: [
                {
                  text: "Object Properties",
                  link: "/wilcom-videos/Summary/summary_-_edit/Object_Properties",
                },
                {
                  text: "Styles",
                  link: "/wilcom-videos/Summary/summary_-_edit/Styles",
                  items: [
                    {
                      text: "Apply styles",
                      link: "/wilcom-videos/Summary/summary_-_edit/Apply_styles",
                    },
                  ],
                },
                {
                  text: "View designs",
                  link: "/wilcom-videos/Summary/summary_-_edit/View_designs",
                  items: [
                    {
                      text: "View designs with the Color-Object List",
                      link: "/wilcom-videos/Summary/summary_-_edit/View_designs_with_the_Color-Object_List",
                    },
                  ],
                },
                {
                  text: "Selection tools",
                  link: "/wilcom-videos/Summary/summary_-_edit/Selection_tools",
                },
                {
                  text: "Editing tools",
                  link: "/wilcom-videos/Summary/summary_-_edit/Editing_tools",
                  items: [
                    {
                      text: "Reshape tools",
                      link: "/wilcom-videos/Summary/summary_-_edit/Reshape_tools",
                    },
                  ],
                },
                {
                  text: "Sequence tools",
                  link: "/wilcom-videos/Summary/summary_-_edit/Sequence_tools",
                },
                {
                  text: "Transformation tools",
                  link: "/wilcom-videos/Summary/summary_-_edit/Transformation_tools",
                },
                {
                  text: "Arrange tools",
                  link: "/wilcom-videos/Summary/summary_-_edit/Arrange_tools",
                },
                {
                  text: "Mirror-merge tools",
                  link: "/wilcom-videos/Summary/summary_-_edit/Mirror-merge_tools",
                  items: [
                    {
                      text: "Mirror selections horizontally & vertically",
                      link: "/wilcom-videos/Summary/summary_-_edit/Mirror_selections_horizontally_vertically",
                    },
                    {
                      text: "Create multiple reflections",
                      link: "/wilcom-videos/Summary/summary_-_edit/Create_multiple_reflections",
                    },
                  ],
                },
                {
                  text: "Generated outlines & fills",
                  link: "/wilcom-videos/Summary/summary_-_edit/Generated_outlines_fills",
                  items: [
                    {
                      text: "Simple offsets",
                      link: "/wilcom-videos/Summary/summary_-_edit/Simple_offsets",
                    },
                    {
                      text: "Outlines & offsets",
                      link: "/wilcom-videos/Summary/summary_-_edit/Outlines_offsets",
                    },
                    {
                      text: "Parallel offsets",
                      link: "/wilcom-videos/Summary/summary_-_edit/Parallel_offsets",
                    },
                  ],
                },
                {
                  text: "Connectors",
                  link: "/wilcom-videos/Summary/summary_-_edit/Connectors",
                  items: [
                    {
                      text: "Object properties > Connectors",
                      link: "/wilcom-videos/Summary/summary_-_edit/Object_properties_Connectors",
                    },
                    {
                      text: "Apply closest join",
                      link: "/wilcom-videos/Summary/summary_-_edit/Apply_closest_join",
                    },
                    {
                      text: "Apply automatic branching",
                      link: "/wilcom-videos/Summary/summary_-_edit/Apply_automatic_branching",
                    },
                  ],
                },
                {
                  text: "Machine functions",
                  items: [
                    {
                      text: "Digitize boring holes",
                      link: "/wilcom-videos/Summary/summary_-_edit/Digitize_boring_holes",
                    },
                  ],
                },
                {
                  text: "Finalize designs",
                  link: "/wilcom-videos/Summary/summary_-_edit/Finalize_designs",
                  items: [
                    {
                      text: "Simulate design stitchouts",
                      link: "/wilcom-videos/Summary/summary_-_edit/Simulate_design_stitchouts",
                    },
                  ],
                },
              ],
            },
            {
              text: "Speciality Features",
              items: [
                {
                  text: "Lettering",
                  link: "/wilcom-videos/Summary/summary_-_special/Lettering",
                  items: [
                    {
                      text: "Create lettering in CorelDRAW Graphics",
                      link: "/wilcom-videos/Summary/summary_-_special/Create_lettering_in_CorelDRAW_Graphics",
                    },
                    {
                      text: "Add embroidery lettering",
                      link: "/wilcom-videos/Summary/summary_-_special/Add_embroidery_lettering",
                    },
                    {
                      text: "Baseline settings",
                      link: "/wilcom-videos/Summary/summary_-_special/Baseline_settings",
                    },
                    {
                      text: "Convert TrueType font",
                      link: "/wilcom-videos/Summary/summary_-_special/Convert_TrueType_font",
                    },
                    {
                      text: "Create alphabets",
                      link: "/wilcom-videos/Summary/summary_-_special/Create_alphabets",
                    },
                    {
                      text: "Kerning table",
                      link: "/wilcom-videos/Summary/summary_-_special/Kerning_table",
                    },
                    {
                      text: "Create user-refined letters",
                      link: "/wilcom-videos/Summary/summary_-_special/Create_user-refined_letters",
                    },
                  ],
                },
                {
                  text: "Teamname lettering",
                  link: "/wilcom-videos/Summary/summary_-_special/Teamname_lettering",
                  items: [
                    {
                      text: "Team names",
                      link: "/wilcom-videos/Summary/summary_-_special/Team_names",
                    },
                    {
                      text: "Teamname matrix",
                      link: "/wilcom-videos/Summary/summary_-_special/Teamname_matrix",
                    },
                  ],
                },
                {
                  text: "Monogramming",
                  link: "/wilcom-videos/Summary/summary_-_special/Monogramming",
                },
                {
                  text: "Lettering kiosk",
                  link: "/wilcom-videos/Summary/summary_-_special/Lettering_kiosk",
                },
                {
                  text: "Appliqué",
                  link: "/wilcom-videos/Summary/summary_-_special/Appliqué",
                  items: [
                    {
                      text: "Create appliqué embroidery",
                      link: "/wilcom-videos/Summary/summary_-_special/Create_appliqué_embroidery",
                    },
                    {
                      text: "Convert vector graphics to appliqué",
                      link: "/wilcom-videos/Summary/summary_-_special/Convert_vector_graphics_to_appliqué",
                    },
                  ],
                },
                {
                  text: "Cording",
                  link: "/wilcom-videos/Summary/summary_-_special/Cording",
                },
                {
                  text: "Sequins",
                  link: "/wilcom-videos/Summary/summary_-_special/Sequins",
                  items: [
                    {
                      text: "Digitize sequin runs",
                      link: "/wilcom-videos/Summary/summary_-_special/Digitize_sequin_runs",
                    },
                    {
                      text: "Digitize sequin fills",
                      link: "/wilcom-videos/Summary/summary_-_special/Digitize_sequin_fills",
                    },
                    {
                      text: "Sequin patterns",
                      link: "/wilcom-videos/Summary/summary_-_special/Sequin_patterns",
                    },
                    {
                      text: "Flip sequins",
                      link: "/wilcom-videos/Summary/summary_-_special/Flip_sequins",
                    },
                  ],
                },
                {
                  text: "Beading",
                  link: "/wilcom-videos/Summary/summary_-_special/Beading",
                  items: [
                    {
                      text: "Digitize bead runs",
                      link: "/wilcom-videos/Summary/summary_-_special/Digitize_bead_runs",
                    },
                  ],
                },
                {
                  text: "Bling",
                  link: "/wilcom-videos/Summary/summary_-_special/Bling",
                },
                {
                  text: "Chenille",
                  link: "/wilcom-videos/Summary/summary_-_special/Chenille",
                  items: [
                    {
                      text: "Compound chenille",
                      link: "/wilcom-videos/Summary/summary_-_special/Compound_chenille",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: "local",
    },
  },
  markdown: {
    config: (md) => {
      md.use(lightbox, {});
    },
  },

  ignoreDeadLinks: true,
});
