// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: CK5Roq2dBGcRPqc72xPE7
// Component: 2ROA3fsgXu
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_cfund_landing_page.module.css"; // plasmic-import: CK5Roq2dBGcRPqc72xPE7/projectcss
import sty from "./PlasmicHudCard.module.css"; // plasmic-import: 2ROA3fsgXu/css

export type PlasmicHudCard__VariantMembers = {};

export type PlasmicHudCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicHudCard__VariantsArgs;
export const PlasmicHudCard__VariantProps = new Array<VariantPropType>();

export type PlasmicHudCard__ArgsType = {};
type ArgPropType = keyof PlasmicHudCard__ArgsType;
export const PlasmicHudCard__ArgProps = new Array<ArgPropType>();

export type PlasmicHudCard__OverridesType = {
  root?: p.Flex<"div">;
  hudTop?: p.Flex<"div">;
  hudBottom?: p.Flex<"div">;
  contentContainer?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultHudCardProps {
  className?: string;
}

function PlasmicHudCard__RenderFunc(props: {
  variants: PlasmicHudCard__VariantsArgs;
  args: PlasmicHudCard__ArgsType;
  overrides: PlasmicHudCard__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"hudTop"}
        data-plasmic-override={overrides.hudTop}
        className={classNames(projectcss.all, sty.hudTop)}
      />

      <div
        data-plasmic-name={"hudBottom"}
        data-plasmic-override={overrides.hudBottom}
        className={classNames(projectcss.all, sty.hudBottom)}
      />

      <div
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames(projectcss.all, sty.contentContainer)}
      >
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__ydfQb)}>
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/cfund_landing_page/images/chartPortJunipng.png",
                fullWidth: 537,
                fullHeight: 310,
                aspectRatio: undefined
              }}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__qGoih)}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__uAm2M
                )}
                component={Link}
                href={"/" as const}
                platform={"nextjs"}
              >
                {"June"}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__yXgvX
                )}
                component={Link}
                href={"/" as const}
                platform={"nextjs"}
              >
                {"July"}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__u3Uei
                )}
                component={Link}
                href={"/" as const}
                platform={"nextjs"}
              >
                {"August"}
              </p.PlasmicLink>
            </p.Stack>
          </div>
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "hudTop", "hudBottom", "contentContainer", "img"],
  hudTop: ["hudTop"],
  hudBottom: ["hudBottom"],
  contentContainer: ["contentContainer", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  hudTop: "div";
  hudBottom: "div";
  contentContainer: "div";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHudCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHudCard__VariantsArgs;
    args?: PlasmicHudCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHudCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHudCard__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHudCard__ArgProps,
          internalVariantPropNames: PlasmicHudCard__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHudCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHudCard";
  } else {
    func.displayName = `PlasmicHudCard.${nodeName}`;
  }
  return func;
}

export const PlasmicHudCard = Object.assign(
  // Top-level PlasmicHudCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    hudTop: makeNodeComponent("hudTop"),
    hudBottom: makeNodeComponent("hudBottom"),
    contentContainer: makeNodeComponent("contentContainer"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicHudCard
    internalVariantProps: PlasmicHudCard__VariantProps,
    internalArgProps: PlasmicHudCard__ArgProps
  }
);

export default PlasmicHudCard;
/* prettier-ignore-end */
